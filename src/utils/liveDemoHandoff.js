// Delay so the project modal overlay finishes closing before opening the demo fiche.
export const LIVE_DEMO_HANDOFF_MS = 350;

export const navigateToLiveDemo = (navigate, demoId) => {
    if (demoId == null || demoId === '') {
        return;
    }

    navigate('/projects?demo=' + encodeURIComponent(demoId));
};
