package masterspringmvc.trasywynikcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TrasyWynikController
{
    @RequestMapping("/trasyWynik")
    public String trasyWynik()   { return "html/trasyWynik"; }
}
