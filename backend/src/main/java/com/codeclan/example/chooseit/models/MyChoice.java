//package com.codeclan.example.chooseit.models;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import org.springframework.boot.SpringApplication;
//import javax.persistence.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name = "choices")
//public class MyChoice implements IChoose{
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    @Column(name = "id", nullable = false)
//    private Long id;
//    @Column(name = "date")
//    private String date;
//
//    @JsonIgnoreProperties({"myChoice"}) //can add more than one field
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "myChoice_id", referencedColumnName = "id")
//    private IChoose choice;
//
//
//    @JsonIgnoreProperties({"user"}) //can add more than one field
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    private Profile profile;
//
//    public MyChoice(String date) {
//        this.date = date;
//    }
//
//    public MyChoice() {
//    }
//
//    //region GETTERS & SETTERS
//
//    public Long getId() {
//        return id;
//    }
//
//    public String getDate() {
//        return date;
//    }
//
//    public void setDate(String date) {
//        this.date = date;
//    }
//
//    public IChoose getChoice() {
//        return choice;
//    }
//
//    public void setChoice(IChoose choice) {
//        this.choice = choice;
//    }
//
//    public Profile getProfile() {
//        return profile;
//    }
//
//    public void setProfile(Profile profile) {
//        this.profile = profile;
//    }
//
//    //endregion
//
//}
