package com.codeclan.example.chooseit.repositories;

import com.codeclan.example.chooseit.models.WorkshopPicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkshopPictureRepository extends JpaRepository<WorkshopPicture, Long> {
}
