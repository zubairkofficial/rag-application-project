export function loadScript(scriptPath) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptPath;
        script.async = true;

        script.onload = () => resolve(script); // Resolve the promise once the script is loaded
        script.onerror = () => reject(new Error(`Script load error: ${scriptPath}`));

        document.body.appendChild(script);
    });
}