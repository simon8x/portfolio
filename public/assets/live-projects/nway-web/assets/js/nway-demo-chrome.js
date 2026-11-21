(function () {
    var doc = document;
    var html = doc.documentElement;
    var body = doc.body;
    if (body == null) {
        return;
    }

    var isEmbedded = window.self !== window.top;
    var DEMO_LAYOUT_WIDTH = 1280;

    function ensureDemoViewport() {
        if (isEmbedded !== true) {
            return;
        }
        var desired = 'width=' + DEMO_LAYOUT_WIDTH;
        var meta = doc.querySelector('meta[name="viewport"]');
        if (meta == null) {
            meta = doc.createElement('meta');
            meta.setAttribute('name', 'viewport');
            doc.head.appendChild(meta);
        }
        if (meta.getAttribute('content') !== desired) {
            meta.setAttribute('content', desired);
        }
    }

    ensureDemoViewport();

    html.className = html.className + ' nway-demo-root';

    var styleHref = 'assets/css/nway-demo.css';
    var hasDemoCss = false;
    var links = doc.getElementsByTagName('link');
    var i;
    for (i = 0; i < links.length; i++) {
        if (links[i].href != null && links[i].href.indexOf('nway-demo.css') !== -1) {
            hasDemoCss = true;
            break;
        }
    }
    if (hasDemoCss !== true) {
        var linkEl = doc.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = styleHref;
        doc.head.appendChild(linkEl);
    }

    var demoScreens = [
        { href: 'home.html', label: 'Home page' },
        { href: 'carreers-page.html', label: 'Careers page' },
        { href: 'games-page.html', label: 'Games page' },
        { href: 'single-game-page.html', label: 'Single game page' },
        { href: 'team-page.html', label: 'Our team page' },
        { href: 'contact-page.html', label: 'Contact page' },
        { href: 'news-page.html', label: 'News page' },
    ];

    var messages = {
        EN: 'Desktop-width HTML prototype — mobile layouts were not completed for this redesign.',
        ES: 'Prototipo HTML a ancho desktop — el rediseño no incluyó versiones mobile completas.',
    };

    var lang = 'EN';
    if (typeof window.NWAY_DEMO_LANG === 'string' && messages[window.NWAY_DEMO_LANG] != null) {
        lang = window.NWAY_DEMO_LANG;
    }

    window.addEventListener('message', function (event) {
        if (event.data == null || event.data.type !== 'portfolio-lang') {
            return;
        }
        if (event.origin !== window.location.origin) {
            return;
        }
        var nextLang = event.data.lang;
        if (messages[nextLang] == null) {
            return;
        }
        lang = nextLang;
        window.NWAY_DEMO_LANG = lang;
    });

    window.NWAY_DEMO_LANG = lang;

    function getCurrentFileName() {
        var path = window.location.pathname || '';
        var parts = path.split('/');
        var last = parts[parts.length - 1];
        if (last == null || last === '') {
            return 'index.html';
        }
        return last;
    }

    function closeNavMenu(topbar) {
        var panel = topbar.querySelector('.nway-demo-nav-panel');
        var toggle = topbar.querySelector('.nway-demo-nav-toggle');
        var backdrop = topbar.querySelector('.nway-demo-nav-backdrop');
        if (panel == null || toggle == null) {
            return;
        }
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        if (backdrop != null) {
            backdrop.classList.remove('is-visible');
        }
        body.classList.remove('nway-demo-nav-panel-open');
    }

    function openNavMenu(topbar) {
        var panel = topbar.querySelector('.nway-demo-nav-panel');
        var toggle = topbar.querySelector('.nway-demo-nav-toggle');
        var backdrop = topbar.querySelector('.nway-demo-nav-backdrop');
        if (panel == null || toggle == null) {
            return;
        }
        panel.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        if (backdrop != null) {
            backdrop.classList.add('is-visible');
        }
        body.classList.add('nway-demo-nav-panel-open');
    }

    function bindDemoMenuToggle(toggle, topbar) {
        var onToggle = function (event) {
            if (event != null) {
                event.preventDefault();
                event.stopPropagation();
            }
            var panel = topbar.querySelector('.nway-demo-nav-panel');
            if (panel == null) {
                return;
            }
            if (panel.classList.contains('is-open') === true) {
                closeNavMenu(topbar);
            } else {
                openNavMenu(topbar);
            }
        };
        if (window.PointerEvent != null) {
            toggle.addEventListener('pointerup', onToggle);
        } else {
            toggle.addEventListener('click', onToggle);
        }
    }

    function bindDemoNavLink(anchor, href, topbar) {
        var navigatedAt = 0;
        var navigate = function (event) {
            if (event != null) {
                event.preventDefault();
                event.stopPropagation();
            }
            var now = Date.now();
            if (now - navigatedAt < 500) {
                return;
            }
            navigatedAt = now;
            closeNavMenu(topbar);
            window.location.assign(href);
        };
        anchor.addEventListener('click', navigate);
        anchor.addEventListener('touchend', function (event) {
            navigate(event);
        });
    }

    function injectDemoTopbar() {
        if (doc.getElementById('nway-demo-topbar') != null) {
            return;
        }

        var currentFile = getCurrentFileName();

        var topbar = doc.createElement('header');
        topbar.id = 'nway-demo-topbar';
        topbar.className = 'nway-demo-topbar';
        topbar.setAttribute('role', 'banner');

        var inner = doc.createElement('div');
        inner.className = 'nway-demo-topbar__inner';

        var logoLink = doc.createElement('a');
        logoLink.className = 'nway-demo-topbar__logo';
        logoLink.href = 'home.html';
        logoLink.setAttribute('aria-label', 'nWay home');
        var logoImg = doc.createElement('img');
        logoImg.src = 'assets/images/logo_nWay.png';
        logoImg.alt = 'nWay';
        logoLink.appendChild(logoImg);

        var toggle = doc.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nway-demo-nav-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'nway-demo-nav-panel');
        toggle.setAttribute('aria-label', 'Prototype screens');
        toggle.innerHTML = '<span class="nway-demo-nav-toggle__bar"></span>';

        inner.appendChild(logoLink);
        inner.appendChild(toggle);
        topbar.appendChild(inner);

        var backdrop = doc.createElement('button');
        backdrop.type = 'button';
        backdrop.className = 'nway-demo-nav-backdrop';
        backdrop.setAttribute('aria-label', 'Close prototype menu');
        backdrop.setAttribute('tabindex', '-1');
        topbar.appendChild(backdrop);

        var panel = doc.createElement('nav');
        panel.id = 'nway-demo-nav-panel';
        panel.className = 'nway-demo-nav-panel';
        panel.setAttribute('aria-label', 'Prototype screens');

        var list = doc.createElement('ul');
        list.className = 'nway-demo-nav-list';

        demoScreens.forEach(function (screen) {
            var item = doc.createElement('li');
            var anchor = doc.createElement('a');
            anchor.href = screen.href;
            anchor.className = 'nway-demo-nav-link';
            anchor.textContent = screen.label;
            if (screen.href === currentFile) {
                anchor.className = anchor.className + ' is-current';
                anchor.setAttribute('aria-current', 'page');
            }
            bindDemoNavLink(anchor, screen.href, topbar);
            item.appendChild(anchor);
            list.appendChild(item);
        });

        panel.appendChild(list);
        topbar.appendChild(panel);

        body.insertBefore(topbar, body.firstChild);
        body.className = body.className + ' has-nway-demo-topbar';

        bindDemoMenuToggle(toggle, topbar);

        backdrop.addEventListener('click', function (event) {
            event.preventDefault();
            closeNavMenu(topbar);
        });

        topbar.addEventListener('keydown', function (event) {
            if (event.key !== 'Escape') {
                return;
            }
            closeNavMenu(topbar);
        });
    }

    injectDemoTopbar();
}());