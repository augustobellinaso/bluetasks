package augustobellinaso.bluetasksbackend.domain.task;

import augustobellinaso.bluetasksbackend.domain.user.AppUser;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Task {

    @Id
    @GeneratedValue
    private Integer id;

    private String description;

    private LocalDate whenToDo;

    private Boolean done = false;

    @ManyToOne
    @JoinColumn(name = "app_user_id")
    private AppUser appUser;

    public Task() {
    }

    public Task(String description, LocalDate whenToDo, Boolean done) {
        this.description = description;
        this.whenToDo = whenToDo;
        this.done = done;
    }
}
