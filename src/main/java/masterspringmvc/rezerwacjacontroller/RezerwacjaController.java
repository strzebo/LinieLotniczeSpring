package masterspringmvc.rezerwacjacontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RezerwacjaController
{
    @RequestMapping("/rezerwacja")
    public String rezerwacja()   { return "html/rezerwacja"; }
}
