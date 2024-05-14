$(document).ready(() => {
    const atty = [{
            name: "Mitchel M.",
            expertise: "Family Law",
            address: "Cherry Hill, NJ",
            image: "images/mitchel.png"
        }, {
            name: "J.M.",
            expertise: "Job & Employment Law",
            address: "Little Rock, AR",
            image: "images/ar.png"
        }, {
            name: "Brigida R.",
            expertise: "Family Law",
            address: "Dallas, TX",
            image: "images/brigida.png"
    }];

    $(".reviews").click((evt) => {
        const selected = atty[evt.currentTarget.id-1]
        $('#attyImage').attr("src", selected.image);
        $('#attyName').text(selected.name);
        $('#attyAddress').text(selected.address);
        $('#attyExpertise').text(selected.expertise);

        $('#clientModal').modal('show');
    });
});