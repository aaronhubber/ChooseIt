package com.codeclan.example.chooseit.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name ="pdf")
public class PdfModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Lob
    private byte[] data;
    @Column(name = "description")
    private String description;
    @Column(name= "content_type")
    private String contentType;
    
    @ManyToOne(optional = false)
    @JsonIgnoreProperties({"userProfile"})
    @JoinColumn(name = "profile_id", nullable = false)
    private Profile profile;


    public PdfModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getDescription() {
        return description;
    }

    public PdfModel(byte[] data, String description, String contentType, Profile profile) {
        this.data = data;
        this.description = description;
        this.contentType = contentType;
        this.profile = profile;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }


}
