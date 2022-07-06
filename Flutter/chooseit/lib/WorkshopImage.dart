class WorkshopImage {
  final String genre;
  final String description;
  final String images;

  WorkshopImage({
    this.genre,
    this.description,
    this.images,
  });

  factory WorkshopImage.fromJson(dynamic json) {
    return WorkshopImage(
        genre: json['genre'] as String,
        description: json['description'] as String,
        images: json['images'][0]['hostedLargeUrl'] as String);
  }
  static List<WorkshopImage> workshopImagesFromSnapshot(List snapshot) {
    return snapshot.map((data) {
      return WorkshopImage.fromJson(data);
    }).toList();
  }

  @override
  String toString() {
    return 'WorkshopImage {genre: $genre, image: $images, description: $description}';
  }
}
