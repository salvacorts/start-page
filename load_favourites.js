const FavouriteTemplate = (url, name, thumbnail) => `
    <div class="col col-lg-3 pl-2 pr-2">
        <div class="web-bookmark rounded d-flex justify-content-center align-items-center">
            <a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none" class="w-100">
                <div class="container web-icon-container shadow mt-2 rounded-70 bg-white d-flex justify-content-center align-items-center">
                    <img class="web-icon" alt="${name}" src="${thumbnail}">
                </div>
                <h6 class="text-center mt-2 text-dark web-name">${name}</h6>
            </a>
        </div>
    </div>
`;

$(document).ready(function() {
    favourtites.forEach(favourite => {

        var thumbnail = `${favourite.url}/favicon.ico`
        if ("image" in favourite) {
            thumbnail = favourite.image
        }

        var fav = FavouriteTemplate(favourite.url, favourite.name, thumbnail)
        $("#favourites").append(fav)
    })
});