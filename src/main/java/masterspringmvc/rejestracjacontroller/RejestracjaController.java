package masterspringmvc.rejestracjacontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RejestracjaController
{
    @RequestMapping("/rejestracja")
    public String rejestracja()   { return "html/rejestracja"; }
}
