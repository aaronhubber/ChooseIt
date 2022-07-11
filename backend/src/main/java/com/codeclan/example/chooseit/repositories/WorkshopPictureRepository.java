package com.codeclan.example.chooseit.repositories;

import com.codeclan.example.chooseit.models.Genre;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface WorkshopPictureRepository extends JpaRepository<WorkshopPicture, Long> {

//    @Query("select w from WorkshopPicture w where w.genre = ?1")
//    WorkshopPicture findByGenre(Genre genre);

//    @Query("SELECT * FROM workshop_pictures ORDER BY random() LIMIT 1")
//    WorkshopPicture findByGenre(Genre genre);

//    @Transactional
//    @Query("SELECT w FROM WorkshopPicture w order by function('RAND')")
//    List<WorkshopPicture> findRandomWorkshopPicture(Genre genre);
//
    @Transactional
    @Query(value = "SELECT * FROM workshop_pictures WHERE genre = ?1 ORDER BY RANDOM() LIMIT 1", nativeQuery = true)
    WorkshopPicture findRandom(Long genre);





}



