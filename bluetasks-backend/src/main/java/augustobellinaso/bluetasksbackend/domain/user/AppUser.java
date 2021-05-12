package augustobellinaso.bluetasksbackend.domain.user;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "app_user")
@Getter
@Setter
public class AppUser {

    @Id
    @GeneratedValue
    private Integer id;

    @NotEmpty(message = "O nome de usuário é obrigatório")
    private String username;

    @NotEmpty(message = "A senha é obrigatória")
    private String password;

    @NotEmpty(message = "O nome de exibição é obrigatório")
    private String displayName;

    public AppUser() {

    }

    public AppUser(String username, String password, String displayName) {
        this.username = username;
        this.password = password;
        this.displayName = displayName;
    }
}
