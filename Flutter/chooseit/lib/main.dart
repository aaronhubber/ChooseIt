import 'package:flutter/material.dart';
import 'package:chooseit/WorkshopImage.dart';
import 'package:chooseit/workshop.api.dart';
import 'package:chooseit/workshop_card.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ChooseIt',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        primaryColor: Colors.white,
        textTheme: TextTheme(
          bodyText2: TextStyle(color: Colors.white),
        ),
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<WorkshopImage> _workshopImages;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    getWorkshopImages();
  }

  Future<void> getWorkshopImages() async {
    _workshopImages = await HttpService.getWorkshopImages();
    setState(() {
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.rocket_launch_rounded),
              SizedBox(width: 10),
              Text('Workshop')
            ],
          ),
        ),
        body: _isLoading
            ? Center(child: CircularProgressIndicator())
            : ListView.builder(
                itemCount: _workshopImages.length,
                itemBuilder: (context, index) {
                  return WorkshopCard(
                      genre: _workshopImages[index].genre.toString(),
                      description: _workshopImages[index].description,
                      thumbnailUrl: _workshopImages[index].images);
                },
              ));
  }
}
