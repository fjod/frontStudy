/// <reference types="@types/google.maps" />

import { User } from "./User";
import {CustomMap} from "./CustomMap";

const u = new User();
console.log(u);

const map = new CustomMap('map');
map.addMarker(u);