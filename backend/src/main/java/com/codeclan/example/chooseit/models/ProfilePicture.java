package com.codeclan.example.chooseit.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name ="profilepictures")
@JsonIgnoreProperties({"userProfile"})
public class ProfilePicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "description")
    private String description;

    @Column(name= "content_type")
    private String contentType;

    @Column(name = "profilepicture")
   // @JsonManagedReference //Forward looking
    @Lob
    private byte[] picture;

    @OneToOne(mappedBy = "profilepicture")
    private Profile profile;

    public ProfilePicture() {
    }

    public ProfilePicture(byte[] picture) {
        this.picture = picture;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getPicture() {
        return picture;
    }

//    @JsonBackReference
    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public Profile getUserProfile() {
        return profile;
    }

    public String getDescription() {
        return description;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public void setUserProfile(Profile profile) {
        this.profile = profile;
    }
}
