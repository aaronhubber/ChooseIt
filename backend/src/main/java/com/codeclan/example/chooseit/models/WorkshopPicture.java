package com.codeclan.example.chooseit.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;


@Entity
@Table(name = "workshop_pictures")
public class WorkshopPicture implements IChoice {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "description")
    private String description;

    @Column(name= "content_type")
    private String contentType;

    @Column(name = "genre")
    private Genre genre;

    @Column(name = "workshop_picture")
    @JsonBackReference //Forward looking
    @Lob
    private byte[] picture;


    public WorkshopPicture() {
    }

    public WorkshopPicture(byte[] picture, Genre genre, String description) {
        this.picture = picture;
        this.genre = genre;
        this.description = description;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
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

}

