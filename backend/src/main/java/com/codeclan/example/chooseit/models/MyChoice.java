package com.codeclan.example.chooseit.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.boot.SpringApplication;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "choices")
public class MyChoice{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "date")
    private String date;
    @Column(name = "choices")
    private ArrayList<IChoice> choices;


    @JsonIgnoreProperties({"user"}) //can add more than one field
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private Profile profile;

    public MyChoice(String date) {
        this.date = date;
        this.choices = new ArrayList<IChoice>();
    }


    //region GETTERS & SETTERS

    public ArrayList<IChoice> getChoices() {
        return choices;
    }

    public void setChoices(ArrayList<IChoice> choices) {
        this.choices = choices;
    }

    public MyChoice() {
    }

    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }


    //endregion

    public void addChoiceToChoiceArray(IChoice choice){
        this.choices.add(choice);
    }


}
