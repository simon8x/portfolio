(function () {
    var tabHeaderG1;
    var tabHeaderG2;
    var tabBodyG1;
    var tabBodyG2;
    var blurStyleEl;
    var goStyleEl;
    var resizeTimer;

    function getViewportWidth() {
        return window.innerWidth || document.documentElement.clientWidth || 1024;
    }

    function centeringForHide(viewportWidth, width) {
        if (viewportWidth > 768) {
            return (30 * viewportWidth / 100) - (width * 0.5);
        }
        if (viewportWidth > 600) {
            return (22 * (viewportWidth) / 100);
        }
        return (13.5 * viewportWidth / 100) * 1.25;
    }

    function centeringForShow(viewportWidth, width) {
        if (viewportWidth > 768) {
            return (20 * viewportWidth / 100) - (width / 2);
        }
        if (viewportWidth > 600) {
            return (30 * (viewportWidth) / 100) - (width / 2);
        }
        return (30 * viewportWidth / 100) - (width / 2);
    }

    function removeInjectedTeamStyles() {
        var nodes = document.querySelectorAll('style[data-nway-team-injected]');
        var i;
        for (i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (node.parentNode != null) {
                node.parentNode.removeChild(node);
            }
        }
        blurStyleEl = null;
        goStyleEl = null;
    }

    function getActiveTabIndex() {
        var headers = document.getElementsByClassName('single-tab');
        var i;
        for (i = 0; i < headers.length; i++) {
            if (headers[i].classList.contains('active')) {
                return i === 0 ? 1 : 2;
            }
        }
        return 1;
    }

    function ensureBlurKeyframes() {
        if (blurStyleEl != null) {
            return;
        }
        blurStyleEl = document.createElement('style');
        blurStyleEl.setAttribute('data-nway-team-injected', 'blur');
        blurStyleEl.type = 'text/css';
        blurStyleEl.appendChild(document.createTextNode(
            '@keyframes nwayTeamBlurDrift { ' +
                '0%, 100% { transform: translate3d(var(--nway-drift-x, 0), var(--nway-drift-y, 0), 0); } ' +
                '50% { transform: translate3d(var(--nway-drift-x2, 0), var(--nway-drift-y2, 0), 0); } ' +
            '}'
        ));
        document.head.appendChild(blurStyleEl);
    }

    function ensureGoKeyframes() {
        if (goStyleEl != null) {
            return;
        }
        goStyleEl = document.createElement('style');
        goStyleEl.setAttribute('data-nway-team-injected', 'go');
        goStyleEl.type = 'text/css';
        goStyleEl.appendChild(document.createTextNode(
            '@keyframes nwayTeamGoAnimation { ' +
                '0% { left: var(--nway-from-left); opacity: 0.3; filter: blur(10px); } ' +
                '100% { left: var(--nway-to-left); opacity: 1; filter: blur(0); } ' +
            '}'
        ));
        document.head.appendChild(goStyleEl);
    }

    function randomDrift() {
        return Math.floor(Math.random() * 24) - 12;
    }

    function startBlurDrift(team) {
        var i;
        ensureBlurKeyframes();
        for (i = 0; i < team.length; i++) {
            var stepItem = team[i];
            stepItem.style.setProperty('--nway-drift-x', randomDrift() + 'px');
            stepItem.style.setProperty('--nway-drift-y', randomDrift() + 'px');
            stepItem.style.setProperty('--nway-drift-x2', randomDrift() + 'px');
            stepItem.style.setProperty('--nway-drift-y2', randomDrift() + 'px');
            var duration = Math.floor(Math.random() * 4) + 4;
            stepItem.style.willChange = 'transform';
            stepItem.style.animation = 'nwayTeamBlurDrift ' + duration + 's ease-in-out 0s infinite alternate';
        }
    }

    function isTabBodyVisible(tabBody) {
        if (tabBody == null) {
            return false;
        }
        return tabBody.classList.contains('d-none') !== true;
    }

    function layoutHiddenTeam(tabBody) {
        if (isTabBodyVisible(tabBody) !== true) {
            return;
        }
        var team = tabBody.getElementsByClassName('team-member-wrapper');
        if (team.length === 0) {
            return;
        }
        tabBody.scrollLeft = 0;
        var viewportWidth = getViewportWidth();
        var width = team[0].clientWidth;
        if (width <= 0) {
            window.requestAnimationFrame(function () {
                layoutHiddenTeam(tabBody);
            });
            return;
        }
        var centeringValue = centeringForHide(viewportWidth, width);
        var i;
        for (i = 0; i < team.length; i++) {
            var teamItem = team[i];
            teamItem.style.animation = 'none';
            teamItem.style.transform = '';
            var leftValue = (-1 * (((i) * 50) + ((i) * width))) + centeringValue;
            teamItem.style.left = leftValue + 'px';
            if (i === 0) {
                teamItem.style.opacity = '1';
                teamItem.style.zIndex = '1';
            } else {
                teamItem.style.opacity = '0.5';
                teamItem.style.zIndex = '';
            }
            var nameEl = teamItem.getElementsByTagName('h2')[0];
            var roleEl = teamItem.getElementsByTagName('p')[0];
            if (nameEl != null) {
                nameEl.classList.add('d-none');
            }
            if (roleEl != null) {
                roleEl.classList.add('d-none');
            }
        }
        startBlurDrift(team);
    }

    function attachDragScroll(slider) {
        if (slider == null || slider.getAttribute('data-nway-slider-bound') === '1') {
            return;
        }
        slider.setAttribute('data-nway-slider-bound', '1');
        var isDown = false;
        var startX = 0;
        var scrollLeft = 0;
        slider.addEventListener('mousedown', function (e) {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', function () {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', function () {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', function (e) {
            if (isDown !== true) {
                return;
            }
            e.preventDefault();
            var x = e.pageX - slider.offsetLeft;
            var walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    function showG1() {
        tabHeaderG1.classList.add('active');
        tabHeaderG2.classList.remove('active');
        tabBodyG1.classList.remove('d-none');
        tabBodyG1.classList.add('d-flex');
        tabBodyG1.classList.add('items');
        tabBodyG2.classList.remove('d-flex');
        tabBodyG2.classList.remove('items');
        tabBodyG2.classList.add('d-none');
        var trigger1 = tabBodyG1.getElementsByClassName('show-team-trigger');
        if (trigger1[0] != null) {
            trigger1[0].classList.remove('d-none');
        }
        window.requestAnimationFrame(function () {
            layoutHiddenTeam(tabBodyG1);
            attachDragScroll(tabBodyG1);
        });
    }

    function showG2() {
        tabHeaderG2.classList.add('active');
        tabHeaderG1.classList.remove('active');
        tabBodyG2.classList.remove('d-none');
        tabBodyG2.classList.add('d-flex');
        tabBodyG2.classList.add('items');
        tabBodyG1.classList.remove('d-flex');
        tabBodyG1.classList.remove('items');
        tabBodyG1.classList.add('d-none');
        var trigger2 = tabBodyG2.getElementsByClassName('show-team-trigger');
        if (trigger2[0] != null) {
            trigger2[0].classList.remove('d-none');
        }
        window.requestAnimationFrame(function () {
            layoutHiddenTeam(tabBodyG2);
            attachDragScroll(tabBodyG2);
        });
    }

    function bindTabHeader(headerEl, handler) {
        if (headerEl == null) {
            return;
        }
        var hitTarget = headerEl;
        if (headerEl.parentNode != null && headerEl.parentNode.classList.contains('single-tab-wrapper') === true) {
            hitTarget = headerEl.parentNode;
        }
        hitTarget.setAttribute('role', 'button');
        hitTarget.setAttribute('tabindex', '0');
        if (headerEl !== hitTarget) {
            headerEl.setAttribute('role', 'presentation');
        }
        var suppressClickUntil = 0;
        var activate = function (event) {
            if (event != null) {
                event.preventDefault();
                event.stopPropagation();
            }
            handler();
        };
        hitTarget.addEventListener('pointerup', function (event) {
            if (event.pointerType === 'mouse' && event.button !== 0) {
                return;
            }
            suppressClickUntil = Date.now() + 400;
            activate(event);
        });
        hitTarget.addEventListener('click', function (event) {
            if (Date.now() < suppressClickUntil) {
                event.preventDefault();
                return;
            }
            activate(event);
        });
        hitTarget.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handler();
            }
        });
    }

    function showTeam() {
        var tabIndex = getActiveTabIndex();
        var teamBody = tabIndex === 1 ? tabBodyG1 : tabBodyG2;
        var team = teamBody.getElementsByClassName('team-member-wrapper');
        var triggers = teamBody.getElementsByClassName('show-team-trigger');
        if (triggers[0] != null) {
            triggers[0].classList.add('d-none');
        }
        if (team.length === 0) {
            return;
        }

        removeInjectedTeamStyles();
        ensureGoKeyframes();

        var viewportWidth = getViewportWidth();
        var width = team[0].clientWidth;
        var gapCalc = 1 / viewportWidth;
        var centeringValue = centeringForShow(viewportWidth, width);
        var leftValue = ((((team.length - 1) * width * gapCalc) - centeringValue));

        var i;
        for (i = 0; i < team.length; i++) {
            var teamItem = team[i];
            var fromValue = (-1 * (((i) * 50) + ((i) * width) + (width * 0.5))) + centeringValue;
            teamItem.style.setProperty('--nway-from-left', fromValue + 'px');
            teamItem.style.setProperty('--nway-to-left', leftValue + 'px');
            teamItem.style.transform = '';
            teamItem.style.animation = 'nwayTeamGoAnimation 0.8s linear 0.1s forwards';
            var nameEl = teamItem.getElementsByTagName('h2')[0];
            var roleEl = teamItem.getElementsByTagName('p')[0];
            if (nameEl != null) {
                nameEl.classList.remove('d-none');
            }
            if (roleEl != null) {
                roleEl.classList.remove('d-none');
            }
        }

        var auxiliarTop = 0;
        for (i = 0; i < team.length; i++) {
            if (auxiliarTop === 0) {
                team[i].style.paddingTop = '0';
                auxiliarTop = 1;
            } else if (auxiliarTop === 1) {
                team[i].style.paddingTop = '5rem';
                auxiliarTop = 2;
            } else {
                team[i].style.paddingTop = '2.5rem';
                auxiliarTop = 0;
            }
        }
    }

    function onResize() {
        if (resizeTimer != null) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(function () {
            var tabIndex = getActiveTabIndex();
            if (tabIndex === 1) {
                layoutHiddenTeam(tabBodyG1);
            } else {
                layoutHiddenTeam(tabBodyG2);
            }
        }, 150);
    }

    function init() {
        tabHeaderG1 = document.getElementById('tabHeaderG1');
        tabHeaderG2 = document.getElementById('tabHeaderG2');
        tabBodyG1 = document.getElementById('tabBodyG1');
        tabBodyG2 = document.getElementById('tabBodyG2');
        if (tabBodyG1 == null || tabBodyG2 == null) {
            return;
        }

        var teamImages = document.getElementsByClassName('featured-img-team-member');
        var i;
        for (i = 0; i < teamImages.length; i++) {
            teamImages[i].draggable = false;
        }

        window.showG1 = showG1;
        window.showG2 = showG2;
        window.showTeam = showTeam;

        bindTabHeader(tabHeaderG1, showG1);
        bindTabHeader(tabHeaderG2, showG2);

        window.addEventListener('resize', onResize);
        window.addEventListener('message', function (event) {
            if (event.data == null || event.data.type !== 'portfolio-viewport-update') {
                return;
            }
            if (event.origin !== window.location.origin) {
                return;
            }
            onResize();
        });
        showG1();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());