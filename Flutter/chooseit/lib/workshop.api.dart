import 'dart:convert';
import 'package:http/http.dart';
import 'package:chooseit/WorkshopImage.dart';

class HttpService {

  final String workshopURL = "http://localhost:8080/workshoppictures";
  
  static Future<List<WorkshopImage>> getWorkshopImages() async {
    Response res = await get(Uri.parse("http://localhost:8080/workshoppictures"));

    if (res.statusCode == 200) {
      final obj = jsonDecode(res.body);
      print(obj['workshopimage'][0]['symbol']);
      List<WorkshopImage> workshopimages = new List<WorkshopImage>();
      for (int i = 0; i < obj['workshopimage'].length; i++) {
        WorkshopImage workshopImage = new WorkshopImage(
            genre: obj['workshopImage'][i]['genre'],
            images: obj['workshopImage'][i]['image'],
            description: obj['workshopImage'][i]['description']);
        workshopimages.add(workshopImage);
      }
      return workshopimages;
    } else {
      throw "Unable to retrieve stock data.";
    }
  }
}
