export function goBack() {
    const fallbackUrl = '/';
    var prevPage = window.location.href;

    window.history.go(-1);

    setTimeout(function(){
        if (window.location.href == prevPage) {
            window.location.href = fallbackUrl;
        }
    }, 500);
}
