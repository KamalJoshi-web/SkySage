import Cloudy from "../assets/cloud.png";
import Cleared from "../assets/clear.png";
import Drizzled from "../assets/drizzle.png";
import Humid from "../assets/humidity.png";
import Rain from "../assets/rain.png";
import Snow from "../assets/snow.png";
import Windy from "../assets/wind.png";
import Mist from "../assets/mist.png";

const icons = [Cloudy, Cleared, Drizzled, Humid, Rain, Snow, Windy, Mist];

export const icon = (val) => {
  switch (val) {
    case 1000:
      return icons[1];
    case 1030:
    case 1135:
    case 1147:
      return icons[7];
    case 1003:
    case 1006:
    case 1009:
      return icons[0];
    case 1063:
    case 1072:
    case 1150:
    case 1153:
    case 1168:
    case 1180:
    case 1183:
    case 1198:
      return icons[2];
    case 1066:
    case 1069:
    case 1204:
    case 1207:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
      return icons[5];
    case 1087:
    case 1117:
    case 1255:
    case 1258:
    case 1261:
    case 1264:
    case 1279:
    case 1282:
      return icons[6];
    case 1171:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1201:
    case 1237:
    case 1240:
    case 1243:
    case 1246:
    case 1249:
    case 1252:
    case 1276:
      return icons[4];
    default:
      return icons[3];
  }
};
