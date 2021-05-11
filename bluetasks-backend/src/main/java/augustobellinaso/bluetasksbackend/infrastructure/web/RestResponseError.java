package augustobellinaso.bluetasksbackend.infrastructure.web;

import lombok.Getter;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;

@Getter
public class RestResponseError {

    private String error;

    private RestResponseError() {

    }

    public static RestResponseError fromValidationError(Errors errors) {
        RestResponseError resp = new RestResponseError();
        StringBuilder sb = new StringBuilder();

        for (ObjectError error : errors.getAllErrors()) {
            sb.append(error.getDefaultMessage()).append(". ");
        }

        resp.error = sb.toString();
        return resp;
    }

}
