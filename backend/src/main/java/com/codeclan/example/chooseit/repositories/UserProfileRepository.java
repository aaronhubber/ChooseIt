package com.codeclan.example.chooseit.repositories;

import com.codeclan.example.chooseit.models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends JpaRepository<Profile, Long> {
}
