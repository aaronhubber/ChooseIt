package com.codeclan.example.chooseit.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;


@Entity
@Table(name = "profiles")
@JsonIgnoreProperties({"user", "profilepicture", "scripts", "licenses"})
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "assistance_level")
    private String assistanceLevel;


    @OneToOne(cascade = CascadeType.ALL)
    private ProfilePicture profilepicture;


    public Profile() {
    }

    public Profile(String name, String assistanceLevel) {
        this.name = name;
        this.assistanceLevel = assistanceLevel;

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public ProfilePicture getProfilepicture() {
        return profilepicture;
    }

    public void setProfilepicture(ProfilePicture profilepicture) {
        this.profilepicture = profilepicture;
    }

    public String getAssistanceLevel() {
        return assistanceLevel;
    }

    public void setAssistanceLevel(String assistanceLevel) {
        this.assistanceLevel = assistanceLevel;
    }
}
