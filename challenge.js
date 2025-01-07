(function() {
    const fragment = window.location.hash.substring(1);
    
    if (fragment.length > 0) {
        try {
            const decoded = atob(fragment); 

            if (decoded.length > 26) {
                let url = decoded.substring(26);

                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'https://' + url;
                }

                window.location.href = url;
            } else {
                console.error("Invalid encoded string.");
                alert("Invalid encoded string.");
            }
        } catch (e) {
            console.error("Failed to decode base64 string.", e);
            alert("Failed to decode base64 string.");
        }
    }
})();
