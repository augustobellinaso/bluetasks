package augustobellinaso.bluetasksbackend.domain.task;

public class DuplicateTaskException extends Exception {

    public DuplicateTaskException(String message) {
        super(message);
    }
}
