package augustobellinaso.bluetasksbackend.domain.user;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "app_user")
@Getter
@Setter
public class AppUser {

    @Id
    @GeneratedValue
    private Integer id;

    private String username;

    private String password;

    private String displaName;

    public AppUser() {

    }

    public AppUser(String username, String password, String displaName) {
        this.username = username;
        this.password = password;
        this.displaName = displaName;
    }
}
