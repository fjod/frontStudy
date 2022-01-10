/// <reference types="@types/google.maps" />

import { User } from "./User";

const u = new User();
console.log(u);

new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});