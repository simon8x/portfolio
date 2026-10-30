var MMJ_I18N = (function () {
    var STORAGE_KEY = 'siteLang';

    var STRINGS = {
        ES: {
            'doc.title': 'Mimuju · Mapa de pantallas (prototipo)',
            'banner.app': '<strong>Prototipo estático</strong> · Sin backend. Algunos botones y filtros son solo maqueta.',
            'hub.banner': '<strong>Prototipo estático</strong> para portfolio · Sin login ni backend. Controles marcados o atenuados en gris son solo maqueta.',
            'hub.confidentiality': 'Por acuerdos de confidencialidad, solo comparto el prototipo que diseñé para validar flujos con usuarios finales; no es la aplicación en producción.',
            'hub.title': 'Mimuju · rol docente',
            'hub.intro': 'Mapa navegable del prototipo EdTech. Recomendación: leé la <strong>guía del docente</strong> abajo, entrá por <strong>Mis clases</strong> o seguí un recorrido; volvé acá con <strong>Mapa de pantallas</strong>.',
            'hub.ctaStart': 'Empezar en Mis clases',
            'hub.ctaMap': 'Ver mapa completo',
            'hub.ctaGuide': 'Guía del docente',
            'hub.guideTitle': 'Guía rápida · dashboard docente',
            'hub.guideLead': 'El dashboard concentra las acciones más habituales del docente en pocas interacciones. Desde las pestañas <strong>Clases</strong>, <strong>Tareas</strong>, <strong>Mensajes</strong> y el icono de <strong>Estadísticas</strong> (gráfico) podés recorrer los flujos de esta demo.',
            'hub.guideAside': '<strong>En el producto completo</strong>, el tutor hace seguimiento del día a día en la escuela; el directivo académico compara lo planificado con lo dictado por cada docente y consulta asistencias en tiempo real de todo el alumnado. <strong>Esta demo solo incluye el rol docente</strong> (no perfiles tutor ni directivo).',
            'guide.classes.title': 'Clases',
            'guide.classes.body': 'Planificación de clases: diferenciá rápido cuáles ya fueron dictadas y cuáles no; abrí, dictá o repasá una clase. En la app completa, el tutor ve desde su perfil qué clases se dictaron.',
            'guide.tasks.title': 'Tareas',
            'guide.tasks.body': 'Planificá tareas o copiá el enunciado para los alumnos y compartilo con tutores, con fecha de entrega. El tutor puede marcar la tarea como completada desde su perfil.',
            'guide.messages.title': 'Mensajes',
            'guide.messages.body': 'Comunicados globales a todos los tutores o mensajes a un tutor. El docente ve quién leyó cada envío; los tutores leen los comunicados en su perfil.',
            'guide.stats.title': 'Estadísticas',
            'guide.stats.body': 'Por alumno: tareas completadas sobre enviadas y mensajes leídos sobre enviados, desde la pestaña de estadísticas del dashboard (solo icono de gráfico).',
            'hub.toursTitle': 'Recorridos sugeridos',
            'hub.mapTitle': 'Mapa completo de pantallas',
            'tour1.title': 'Rutina de clase',
            'tour1.desc': 'Dashboard, listado y apertura de una clase dictada.',
            'tour1.step1': 'Dashboard de clases',
            'tour1.step2': 'Abrir / dictar clase',
            'tour1.cta': 'Iniciar recorrido',
            'tour2.title': 'Ciclo de tarea',
            'tour2.desc': 'Seguimiento y revisión de entregas.',
            'tour2.step1': 'Dashboard de tareas',
            'tour2.step2': 'Revisar tarea',
            'tour2.cta': 'Iniciar recorrido',
            'tour3.title': 'Alumnos y asistencia',
            'tour3.desc': 'Listado, ficha y toma de asistencia.',
            'tour3.step1': 'Listado de alumnos',
            'tour3.step2': 'Ficha del alumno',
            'tour3.step3': 'Tomar asistencia',
            'tour3.cta': 'Iniciar recorrido',
            'map.classes': 'Clases',
            'map.tasks': 'Tareas',
            'map.messages': 'Mensajes',
            'map.profile': 'Perfil',
            'map.rooms': 'Aulas y alumnos',
            'map.subjects': 'Asignaturas',
            'map.attendance': 'Asistencia',
            'map.stats': 'Estadísticas',
            'link.dashboard': 'Dashboard',
            'link.create': 'Crear',
            'link.edit': 'Editar',
            'link.teach': 'Dictar',
            'link.review': 'Revisar',
            'link.view': 'Ver',
            'link.viewRooms': 'Ver aulas',
            'link.createRoom': 'Crear aula',
            'link.editRoom': 'Editar aula',
            'link.studentList': 'Listado alumnos',
            'link.studentProfile': 'Ficha alumno',
            'link.takeAttendance': 'Tomar asistencia',
            'link.statsDashboard': 'Dashboard stats',
            'nav.sitemap': 'Mapa de pantallas',
            'nav.stats': 'Estadísticas',
            'nav.homeTitle': 'Inicio · Mis clases',
            'stats.intro': 'Seguimiento por alumno: tareas completadas sobre enviadas y mensajes leídos sobre enviados.',
            'stats.colStudent': 'Alumno',
            'stats.colTasks': 'Tareas',
            'stats.hintTasks': 'completadas / enviadas',
            'stats.colMessages': 'Mensajes',
            'stats.hintMessages': 'leídos / enviados'
        },
        EN: {
            'doc.title': 'Mimuju · Screen map (prototype)',
            'banner.app': '<strong>Static prototype</strong> · No backend. Some buttons and filters are mock-only.',
            'hub.banner': '<strong>Static prototype</strong> for portfolio · No login or backend. Controls marked or greyed out are mock-only.',
            'hub.confidentiality': 'Under confidentiality agreements, I may only share the prototype I designed to validate flows with end users; this is not the production application.',
            'hub.title': 'Mimuju · teacher role',
            'hub.intro': 'Browsable map of the EdTech prototype. Tip: read the <strong>teacher guide</strong> below, start in <strong>My classes</strong>, or follow a walkthrough; return here via <strong>Screen map</strong>.',
            'hub.ctaStart': 'Start in My classes',
            'hub.ctaMap': 'View full map',
            'hub.ctaGuide': 'Teacher guide',
            'hub.guideTitle': 'Quick guide · teacher dashboard',
            'hub.guideLead': 'The dashboard groups the teacher\'s most common actions in few interactions. Use the <strong>Classes</strong>, <strong>Assignments</strong>, <strong>Messages</strong>, and <strong>Statistics</strong> tabs (chart icon) to explore this demo.',
            'hub.guideAside': '<strong>In the full product</strong>, tutors follow day-to-day school activity; academic directors compare each teacher\'s planned vs taught classes and view school-wide attendance in real time. <strong>This demo includes only the teacher role</strong> (no tutor or director profiles).',
            'guide.classes.title': 'Classes',
            'guide.classes.body': 'Class planning: quickly see which classes were taught and which were not; open, teach, or review a class. In the full app, tutors see taught classes from their profile.',
            'guide.tasks.title': 'Assignments',
            'guide.tasks.body': 'Plan assignments or copy the student prompt and share with tutors, including due dates. Tutors can mark assignments complete from their profile.',
            'guide.messages.title': 'Messages',
            'guide.messages.body': 'Broadcast notices to all tutors or message one tutor. Teachers see who read each message; tutors read notices in their profile.',
            'guide.stats.title': 'Statistics',
            'guide.stats.body': 'Per student: assignments completed vs assigned and messages read vs sent, from the dashboard Statistics tab.',
            'hub.toursTitle': 'Suggested walkthroughs',
            'hub.mapTitle': 'Full screens maps',
            'tour1.title': 'Class routine',
            'tour1.desc': 'Dashboard, list, and opening a taught class.',
            'tour1.step1': 'Classes dashboard',
            'tour1.step2': 'Open / teach class',
            'tour1.cta': 'Start walkthrough',
            'tour2.title': 'Assignment cycle',
            'tour2.desc': 'Tracking and reviewing submissions.',
            'tour2.step1': 'Assignments dashboard',
            'tour2.step2': 'Review assignment',
            'tour2.cta': 'Start walkthrough',
            'tour3.title': 'Students & attendance',
            'tour3.desc': 'Roster, profile, and attendance.',
            'tour3.step1': 'Student list',
            'tour3.step2': 'Student profile',
            'tour3.step3': 'Take attendance',
            'tour3.cta': 'Start walkthrough',
            'map.classes': 'Classes',
            'map.tasks': 'Assignments',
            'map.messages': 'Messages',
            'map.profile': 'Profile',
            'map.rooms': 'Classrooms & students',
            'map.subjects': 'Subjects',
            'map.attendance': 'Attendance',
            'map.stats': 'Statistics',
            'link.dashboard': 'Dashboard',
            'link.create': 'Create',
            'link.edit': 'Edit',
            'link.teach': 'Teach',
            'link.review': 'Review',
            'link.view': 'View',
            'link.viewRooms': 'View classrooms',
            'link.createRoom': 'Create classroom',
            'link.editRoom': 'Edit classroom',
            'link.studentList': 'Student list',
            'link.studentProfile': 'Student profile',
            'link.takeAttendance': 'Take attendance',
            'link.statsDashboard': 'Stats dashboard',
            'nav.sitemap': 'Screen map',
            'nav.stats': 'Statistics',
            'nav.homeTitle': 'Home · My classes',
            'stats.intro': 'Per-student tracking: assignments completed out of assigned, and messages read out of sent.',
            'stats.colStudent': 'Student',
            'stats.colTasks': 'Assignments',
            'stats.hintTasks': 'completed / assigned',
            'stats.colMessages': 'Messages',
            'stats.hintMessages': 'read / sent'
        }
    };

    var detectBrowserLang = function () {
        var preferred = navigator.language;
        if (preferred == null) {
            return 'EN';
        }
        return preferred.toLowerCase().split('-')[0] === 'es' ? 'ES' : 'EN';
    };

    var readPortfolioLang = function () {
        try {
            var stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored === 'EN' || stored === 'ES') {
                return stored;
            }
        } catch (err) {
            return detectBrowserLang();
        }
        return detectBrowserLang();
    };

    var translate = function (lang, key) {
        var bucket = STRINGS[lang];
        if (bucket == null) {
            bucket = STRINGS.EN;
        }
        var value = bucket[key];
        if (value == null) {
            value = STRINGS.EN[key];
        }
        return value == null ? '' : value;
    };

    var applyTextNodes = function (lang) {
        var doc = document;
        var nodes = doc.querySelectorAll('[data-i18n]');
        var i;
        for (i = 0; i < nodes.length; i = i + 1) {
            var node = nodes[i];
            var key = node.getAttribute('data-i18n');
            if (key == null || key === '') {
                continue;
            }
            node.textContent = translate(lang, key);
        }

        var htmlNodes = doc.querySelectorAll('[data-i18n-html]');
        for (i = 0; i < htmlNodes.length; i = i + 1) {
            var htmlNode = htmlNodes[i];
            var htmlKey = htmlNode.getAttribute('data-i18n-html');
            if (htmlKey == null || htmlKey === '') {
                continue;
            }
            htmlNode.innerHTML = translate(lang, htmlKey);
        }

        var titleNodes = doc.querySelectorAll('[data-i18n-title]');
        for (i = 0; i < titleNodes.length; i = i + 1) {
            var titleNode = titleNodes[i];
            var titleKey = titleNode.getAttribute('data-i18n-title');
            if (titleKey == null || titleKey === '') {
                continue;
            }
            titleNode.setAttribute('title', translate(lang, titleKey));
        }

        var docTitle = doc.querySelector('title[data-i18n-doc-title]');
        if (docTitle != null) {
            docTitle.textContent = translate(lang, 'doc.title');
        }

        doc.documentElement.lang = lang === 'ES' ? 'es' : 'en';
    };

    var updateAppBanner = function (lang, bannerEl) {
        if (bannerEl == null) {
            return;
        }
        bannerEl.innerHTML = '<p class="mmj-demo-banner-text">' + translate(lang, 'banner.app') + '</p>';
    };

    var apply = function (lang) {
        var resolved = lang === 'ES' || lang === 'EN' ? lang : readPortfolioLang();
        applyTextNodes(resolved);
        return resolved;
    };

    var init = function (bannerEl) {
        var lang = apply(readPortfolioLang());
        updateAppBanner(lang, bannerEl);

        window.addEventListener('message', function (ev) {
            if (ev.data == null || ev.data.type !== 'portfolio-lang') {
                return;
            }
            if (ev.origin !== window.location.origin) {
                return;
            }
            var nextLang = ev.data.lang;
            if (nextLang !== 'EN' && nextLang !== 'ES') {
                return;
            }
            apply(nextLang);
            updateAppBanner(nextLang, bannerEl);
        });

        window.addEventListener('storage', function (ev) {
            if (ev.key !== STORAGE_KEY) {
                return;
            }
            if (ev.newValue !== 'EN' && ev.newValue !== 'ES') {
                return;
            }
            apply(ev.newValue);
            updateAppBanner(ev.newValue, bannerEl);
        });
    };

    return {
        apply: apply,
        init: init,
        readPortfolioLang: readPortfolioLang
    };
})();
