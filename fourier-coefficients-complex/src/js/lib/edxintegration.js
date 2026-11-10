define(['require', 'jschannel'], function (t) {
  'use strict';
  function i(t, i, s) {
    var h;
    window.parent !== window
      ? ((h = e.build({ window: window.parent, origin: '*', scope: 'JSInput' })),
        h.bind('getGrade', t),
        h.bind('getState', i),
        h.bind('setState', s))
      : console.log(
          'The application is not embedded in an iframe. A channel could not be established',
        );
  }
  var e = t('jschannel');
  return { createChannel: i };
});
