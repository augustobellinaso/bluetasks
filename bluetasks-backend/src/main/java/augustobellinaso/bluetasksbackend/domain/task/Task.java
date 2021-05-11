package augustobellinaso.bluetasksbackend.domain.task;

import augustobellinaso.bluetasksbackend.domain.user.AppUser;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@EntityListeners(TaskListener.class)
public class Task {

    @Id
    @GeneratedValue
    private Integer id;

    @NotEmpty(message = "A descrição da tarefa é obrigatória")
    @Length(min = 3, max = 60, message = "O tamanho da tarefa é inválido")
    private String description;

    @NotNull(message = "A data da tarefa é obrigatória")
    @FutureOrPresent(message = "A data da tarefa não pode estar no passado")
    private LocalDate whenToDo;

    private Boolean done = false;

    @ManyToOne
    @JoinColumn(name = "app_user_id")
    //@NotNull(message = "O usuário da tarefa é obrigatório")
    private AppUser appUser;

    public Task() {
    }

    public Task(String description, LocalDate whenToDo, Boolean done) {
        this.description = description;
        this.whenToDo = whenToDo;
        this.done = done;
    }
}
