package masterspringmvc.paneladministratoracontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PanelAdministratoraController
{
    @RequestMapping("/panelAdministratora")
    public String panelAdministratora()   { return "html/panelAdministratora"; }
}
