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

    @Column(name = "choices")
    private ArrayList<MakeAChoice> myChoice;

    @Column(name = "assistance_level")
    @Enumerated(value = EnumType.STRING)
    private AssistanceLevel assistanceLevel;


    @OneToOne(cascade = CascadeType.ALL)
    private ProfilePicture profilepicture;


//    *******************************************************
//                       CONSTRUCTORS
//    *******************************************************

    public Profile() {
    }

    public Profile(String name, AssistanceLevel assistanceLevel) {
        this.name = name;
        this.assistanceLevel = assistanceLevel;
        this.myChoice= new ArrayList<>();
    }

//    *******************************************************
//                   GETTERS AND SETTERS
//    *******************************************************

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

    public AssistanceLevel getUserType() {
        return assistanceLevel;
    }

    public void setUserType(AssistanceLevel assistanceLevel) {
        this.assistanceLevel = assistanceLevel;
    }
}
