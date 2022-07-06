//package com.codeclan.example.chooseit.models;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.util.ArrayList;
//
//@Entity
//@Table(name = "choices")
//public class MakeAChoice {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    @Column(name = "id", nullable = false)
//    private Long id;
//    @Column(name = "date")
//    private String date;
//    @Column(name = "choices")
//    private ArrayList<WorkshopPicture> choices;
//
//    private WorkshopPicture workshopPicture;
//
//
//    @JsonIgnoreProperties({"user"}) //can add more than one field
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "user_id", referencedColumnName = "id")
//    private Profile profile;
//
//    public MakeAChoice(String date, WorkshopPicture workshopPicture) {
//        this.date = date;
//        this.choices = new ArrayList<WorkshopPicture>();
//        this.workshopPicture = workshopPicture;
//    }
//
//
//    //region GETTERS & SETTERS
////
////    public ArrayList<IChoice> getChoices() {
////        return choices;
////    }
////
////    public void setChoices(ArrayList<IChoice> choices) {
////        this.choices = choices;
////    }
//
//    public MakeAChoice() {
//    }
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
//
//    public Profile getProfile() {
//        return profile;
//    }
//
//    public void setProfile(Profile profile) {
//        this.profile = profile;
//    }
//
//
//    //endregion
////
////    public void addChoiceToChoiceArray(IChoice choice){
////        this.choices.add(choice);
////    }
////
////    public ArrayList<MakeAChoice> makeYourChoice{
////        iterate through <IChoose.genre.art> and iterate through <Ichoose.genre.music>
////            makes a new array list
////        compare contents of list to form result
////            return add to
////    }
//
//
//}
