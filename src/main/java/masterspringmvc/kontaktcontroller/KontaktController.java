package masterspringmvc.kontaktcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class KontaktController
{
    @RequestMapping("/kontakt")
    public String kontakt()   { return "html/kontakt"; }
}
