package masterspringmvc.trasycontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TrasyController
{
    @RequestMapping("/trasy")
    public String trasy()   { return "html/trasy"; }
}
