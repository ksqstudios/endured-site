// The meter. The page is a session: each stage section begins at the minute
// the app reaches that depth (data-minute), and the meter reads the elapsed
// time at the middle of the screen by interpolating between them. End keeps
// whatever the meter says, the way the app keeps a session as it was.
// Nothing is stored or sent.

(function () {
  var meter = document.getElementById('meter');
  if (!meter) return;

  var time = document.getElementById('meter-time');
  var stageEl = document.getElementById('meter-stage');
  var end = document.getElementById('meter-end');
  var note = document.getElementById('meter-note');
  var stages = Array.prototype.slice.call(document.querySelectorAll('.stage'));
  var ended = false;

  var colors = {
    Bone: ['#f5f1e8', '#24231f'],
    Stone: ['#c9c2b0', '#24231f'],
    Slate: ['#6f6a5c', '#f7f3ea'],
    Graphite: ['#3f3d38', '#f7f3ea'],
    Iron: ['#1a1917', '#f7f3ea']
  };

  // The last section runs on past ninety minutes; its bottom is two hours.
  var LAST = 120;

  function clock(minutes) {
    var s = Math.max(0, Math.floor(minutes * 60));
    var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
    return h + ':' + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
  }

  function read() {
    // The reading line sits mid-screen, easing up from the very top so the
    // session reads 0:00:00 before you have scrolled at all.
    var line = scrollY + innerHeight * 0.5 * Math.min(1, scrollY / (innerHeight * 0.5));
    var docBottom = document.documentElement.scrollHeight;
    for (var i = 0; i < stages.length; i++) {
      var el = stages[i];
      var top = el.offsetTop;
      var bottom = i + 1 < stages.length ? stages[i + 1].offsetTop : docBottom;
      if (line < bottom || i === stages.length - 1) {
        var from = +el.dataset.minute;
        var to = i + 1 < stages.length ? +stages[i + 1].dataset.minute : LAST;
        var t = Math.min(1, Math.max(0, (line - top) / (bottom - top)));
        return { minutes: from + (to - from) * Math.min(1, t), stage: el.dataset.stage };
      }
    }
    return { minutes: 0, stage: 'Bone' };
  }

  function paint(stage) {
    meter.style.setProperty('--meter-bg', colors[stage][0]);
    meter.style.setProperty('--meter-ink', colors[stage][1]);
  }

  function update() {
    if (ended) return;
    var r = read();
    time.textContent = clock(r.minutes);
    stageEl.textContent = r.stage;
    paint(r.stage);
  }

  end.addEventListener('click', function () {
    if (!ended) {
      ended = true;
      meter.classList.add('is-ended');
      end.textContent = 'Begin again';
      note.textContent = 'Saved as it was: ' + time.textContent + ', ' + stageEl.textContent +
        '. If you stopped early, that is the record.';
    } else {
      ended = false;
      meter.classList.remove('is-ended');
      end.textContent = 'End';
      note.textContent = '';
      update();
    }
  });

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();
