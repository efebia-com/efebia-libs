import { tick } from "svelte";

export async function mediaQuery(node, mediaQueryString) {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    

    function onMediaChange(e) {
        node.dispatchEvent(
            new CustomEvent('mediachanged', {
                detail: {
                    matches: e.matches
                }
            })
        )
    }

    mediaQueryList.addEventListener('change', onMediaChange);
    await tick();
    onMediaChange({
        matches: mediaQueryList.matches
    })
    return {
        destroy() {
            mediaQueryList.removeEventListener('change', onMediaChange);
        }
    };
}