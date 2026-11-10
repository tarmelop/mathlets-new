/*
 * FourierAudio: plays a periodic waveform given by its Fourier coefficients,
 * using a Web Audio OscillatorNode with a PeriodicWave.
 *
 * The waveform played is
 *
 *   x(t) = sum_k real[k] cos(2 pi k f t) + imag[k] sin(2 pi k f t)
 *
 * where f is `frequency` in Hz. Index 0 (DC) is ignored by Web Audio.
 *
 * Signal path: oscillator -> gain (volume) -> speakers.
 *
 * Readable rewrite of the "fourieraudio" module in the minified common.js of the
 * MIT Mathlets shared library (https://mathlets.org/). Original code by the MIT
 * Mathlets authors; the only functional change is the optional
 * `disableNormalization` flag. Licensed under CC BY-NC-SA 3.0 — see LICENSE.md.
 */
define(['utils'], function (utils) {
  'use strict';

  if (!utils.testForAudio()) {
    return undefined;
  }

  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  /**
   * new FourierAudio([context], [frequency], [volume], [real], [imag])
   * All arguments are optional.
   */
  function FourierAudio(context, frequency, volume, real, imag) {
    this.frequency = 440;
    this.volume = 1;
    this.real = new Float32Array([0, 1]); // default: a pure sine-shaped cosine
    this.imaginary = new Float32Array([0, 0]);
    // When false (Web Audio's default), the browser rescales the wave so its
    // peak is 1. That rescaling depends on the phases of the harmonics.
    this.disableNormalization = false;

    this.context = context || new window.AudioContext();
    if (arguments.length >= 2) this.frequency = frequency;
    if (arguments.length >= 3) this.volume = volume;
    if (arguments.length >= 4) this.real = new Float32Array(real);
    if (arguments.length >= 5) this.imaginary = new Float32Array(imag);

    this.gain = this.context.createGain();
    this.gain.connect(this.context.destination);
    this.generateOscillator();
  }

  FourierAudio.prototype.updatePeriodicWave = function () {
    this.periodicWave = this.context.createPeriodicWave(this.real, this.imaginary, {
      disableNormalization: this.disableNormalization,
    });
    this.oscillator.setPeriodicWave(this.periodicWave);
  };

  /**
   * An OscillatorNode can only be started once, so a new one is made for each
   * play().
   */
  FourierAudio.prototype.generateOscillator = function () {
    this.oscillator = this.context.createOscillator();
    this.oscillator.connect(this.gain);
    this.updatePeriodicWave();
  };

  /**
   * @param {number[]} real  cosine coefficients, real[k] for harmonic k
   * @param {number[]} imag  sine coefficients, same length as `real`
   * @param {{disableNormalization?: boolean}} [options]
   */
  FourierAudio.prototype.setFourierTerms = function (real, imag, options) {
    this.real = new Float32Array(real);
    this.imaginary = new Float32Array(imag);
    this.disableNormalization = !!(options && options.disableNormalization);
    this.updatePeriodicWave();
  };

  FourierAudio.prototype.setFrequency = function (frequency) {
    this.frequency = frequency;
    this.oscillator.frequency.value = this.frequency;
  };

  FourierAudio.prototype.setVolume = function (volume) {
    this.volume = volume;
    this.gain.gain.value = this.volume;
  };

  FourierAudio.prototype.play = function () {
    this.context.resume();
    this.generateOscillator();
    this.oscillator.start(0);
    this.setFrequency(this.frequency);
  };

  FourierAudio.prototype.stop = function () {
    this.oscillator.stop(0);
  };

  return FourierAudio;
});
