(function () {
    var doc = document;
    var body = doc.body;
    if (body == null) {
        return;
    }

    var path = window.location.pathname || '';
    var isHub = path.indexOf('index.html') !== -1 || path.match(/\/mimuju\/?$/);

    var bannerEl = null;
    if (isHub !== true) {
        bannerEl = doc.createElement('div');
        bannerEl.className = 'mmj-demo-banner';
        bannerEl.setAttribute('role', 'note');
        body.insertBefore(bannerEl, body.firstChild);
        body.className = body.className + ' has-mmj-demo-banner';
    }

    if (typeof MMJ_I18N !== 'undefined') {
        MMJ_I18N.init(bannerEl);
    }

    var stubLinks = doc.querySelectorAll('a[href="#!"]');
    var i;
    for (i = 0; i < stubLinks.length; i = i + 1) {
        var link = stubLinks[i];
        if (link.classList.contains('disabled')) {
            continue;
        }
        link.classList.add('demo-stub-link');
        link.setAttribute('aria-disabled', 'true');
        link.addEventListener('click', function (ev) {
            ev.preventDefault();
        });
    }
})();
