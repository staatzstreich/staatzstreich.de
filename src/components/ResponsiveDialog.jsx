import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            color: 'ghostwhite',
            border: 4,
            borderColor: 'deeppink',
            transform: 'rotate(10deg)',
            "&:hover": {
              color: 'ghostwhite',
              backgroundColor: 'deeppink',
              border: 4,
              borderColor: 'deeppink',
            }
      }}>
        zur Geschichte...
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Unruhe im Stall"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
              <p>
                  <strong>
                      Iah, tut das gut!» Mit einem wohligen Stöhnen streckt das Eselchen seinen Rücken durch.
                      Seine alten Knochen knacken. «Recht hast du, kleiner Esel.
                      Es geht nichts über etwas frische Weihnachtsluft!», stimmt Josef dem Grauen zu und klopft sich altes Stroh vom Mantel.
                      Dann beugt er sich mit Maria zusammen über das Jesuskind in der Krippe.
                      «Siehst du Schatz, das Kind hat das Jahr in der Strohkiste gut überstanden.»
                      Nickend streicht Maria sanft über die Wangen des kleinen Jesus.
                      «Wie schnell doch wieder Advent ist», sagt sie.
                      «Was meinst du, Josef, wie feiert wohl die Menschen-Familie dieses Jahr Weihnachten?»
                  </strong>
              </p>
              <p>
                  Vorsichtig spähen die drei Krippenfiguren aus ihrem gemütlichen Holzstall hinaus.
                  Im Wohnzimmer herrscht Chaos. Unzählige Boxen mit Weihnachtsdekoration stehen überall verteilt im
                  Raum.
                  Die Mutter eilt umher, rückt Kerzenständer zurecht, hängt Engelsfiguren auf und behält bei allem
                  den Backofen im Auge.
                  Vom Sofa her ertönen die wütenden Rufe eines Knaben, der just seinen Playstation - Controller
                  wegschmeisst.
                  Grinsend stupst das Eselchen Josef an:
                  «Mensch Joe, du hast die Wette schon wieder gewonnen. Der Junge klebt immer noch am Fernseher fest.»
                  Josef krault den Esel zwischen den Ohren und mustert irritiert das Tohuwabohu, welches sich vor seinen
                  Augen abspielt.
                  «Das werden ja denkwürdige Weihnachten werden», flüstert er den anderen zu. Plötzlich schiebt sich
                  ein rundes Kindergesicht vor den Stall.
                  Erschrocken erstarren die Krippenfiguren mitten in der Bewegung.
                  Aber das Mädchen kneift nur konzentriert ihre blauen Augen zusammen und befestigt etwas ungelenk den
                  Weihnachtsstern am Dach der Krippe.
                  «Fertig, Mami! Darf ich jetzt mit Laura spielen gehen?», schreit das Kind und ist auch schwupp schon
                  wieder verschwunden.
                  «Das ging dieses Jahr aber schnell», staunt Maria. «Weiss die Familie noch, dass wir nicht nur
                  Dekorationsgegenstände darstellen?»
                  Der Esel schmiegt sich an sie und antwortet: «Keine Ahnung. Und irgendwie fühl ich mich gerade so
                  lieblos behandelt.»
                  Josef zuckt bloss mit den Schultern.
              </p>
              <p>
                  So vergehen die Tage. Immerzu sind die grossen Menschen im Stress, jagen Geschenken und Terminen hinterher.
                  Betrübt lässt das Eselchen bald seine Ohren hängen.
                  «Könnt ihr euch auch nicht auf Weihnachten freuen, wenn unsere Menschen-Familie so viel um die Ohren
                  hat?», fragt es die anderen Figuren.
                  Maria schüttelt betreten den Kopf. «Und sie scheinen dieses Jahr auch völlig vergessen zu haben,
                  dass Weihnachten die Geburt von unserem Jesus hier ist.
                  Anstatt sich darauf zu konzentrieren, geben sie der Arbeit den Vorzug oder füllen ihre Zeit mit
                  unwichtigen Dingen.»
                  So schleicht sich allmählich ein dunkler Schatten über den Stall und die Vorfreude auf ein
                  liebevolles Fest geht verloren.
                  Schliesslich platzt Josef der Kragen. Aufgewühlt streicht sich der Zimmermann durch seinen Bart.
                  «Genug ist genug!
                  Wir müssen etwas unternehmen – so kann es doch nicht weitergehen.»
                  «Iah, iah! Klar. Aber was sollen wir tun?», jammert der Esel. Ratlos sehen sich die Krippenfiguren
                  an.
              </p>
              <p>
                  «Ich könnte die Menschen-Familie mit meinem Licht blenden», ertönt mit einem Mal ein piepsiges
                  Stimmchen vom Stalldach her. «Das wird sie sicher auf uns aufmerksam machen.»
                  Schon leuchtet der Weihnachtsstern immer heller und kräftiger. Vor Konzentration zittern sogar seine Zacken.
                  Doch das Aufblitzen über der Stallkrippe geht in der Helligkeit des laufenden Fernsehers unter.
              </p>
              <p>
                  «Danke für deinen Versuch, kleiner Stern», murmelt Maria, «jedoch müssen wir offensichtlich zu
                  drastischeren Mitteln greifen.» Jetzt werden alle Krippenfiguren hellhörig. Drastisch?
                  Was schwebt Maria da vor? «Also, was ist essenziell für das Gelingen des Weihnachtsfests?»
                  Maria blickt die Figuren reihum an. «Genau! Das Jesuskind! Überlegt doch einmal: Was macht wohl
                  unsere Menschen-Familie, wenn das Jesuskind aus heiterem Himmel verschwindet?
                  Das können sie doch nicht auf sich sitzen lassen. An Weihnachten braucht es ein Jesuskind – basta!»
                  Ein feines Lächeln hat sich auf Josefs Ge- sicht geschlichen. «Das könnte funktionieren ...»
              </p>
              <p>
                  Am nächsten Tag reisst ein schriller Schrei die Krippen- figuren aus dem Schlaf.
                  «Mami, Papi! Unser Jesuskind ist geklaut worden!»
                  Hektisch zieht das Mädchen seine Eltern an den Händen ins Wohnzimmer.
                  «Schaut nur! Die Krippe lag umgekippt vor dem Stall und keine Spur von Jesus.
                  Hat ihn jemand gestohlen? Wo kann er nur sein?», verhaspelt sich die Kleine beinahe.
                  Ihr Vater reibt verschlafen die Augen. «Was erzählst du da? Jemand hat unsere Krippenfigur gestohlen?»
                  Verstohlen zwinkern sich die Krippenfiguren zu.
                  «Wahrscheinlich ist sie einfach auf den Boden gefallen. Vielleicht ist ja die Katze drangekommen?»
                  Maria und Josef sehen gespannt zu, wie nun die Menschenfamilie auf allen vieren auf dem Boden herumkriecht und nach dem Jesuskind sucht.
                  Der Esel kann nur mit Mühe ein kicherndes «Iah» unterdrücken.</p>
              <p>
                  «Hat jemand die Figur gefunden?», fragt die Mutter schliesslich und kriecht mühselig unter dem
                  Weihnachtsbaum hervor. Verärgert zupft sie sich die Nadeln aus den Haaren. Niemand antwortet ihr.
                  «Na schön! Dann werde ich heute noch eine neue Jesusfigur kaufen.»
                  «Aber Mami, du kannst doch Jesus nicht einfach so ersetzen und einen neuen kaufen!»,
                  ruft das kleine Mädchen aus. «Das geht doch nicht. Was, wenn die alte Figur wieder auftaucht?
                  Das Jesusfigürchen wird dann sicher traurig sein, wenn es nicht in seine Krippe zurückkann.»
                  Über diese Worte muss Maria lächeln. Stumm verfolgt sie den Wortwechsel.
              </p>
              <p>
                  Nun mischt sich auch der Vater ein. «Kauf bloss keine neue Figur! Dieses Krippenspiel habe ich noch von
                  meiner Uroma geerbt.» Gutmütig fährt er fort: «Wir suchen einfach alle gemeinsam nach unserem Jesus.
                  Er wird sicherlich irgendwo in der Wohnung sein. Und wir haben ja noch bis morgen Abend Zeit.»
              </p>
              <p>
                  Nach dem Frühstück wird also eine grossangelegte Suchaktion eingeleitet.
                  Alle Zimmer werden auf den Kopf gestellt, sogar der Estrich und der Schlafkorb der Katze werden
                  durchwühlt. Aber das Jesuskind bleibt unauffindbar.
                  In der Krippe wispern die Figuren aufgeregt mitein- ander. «Iah, iah! Denkt ihr, es hat geklappt?»,
                  brummelt das Eselchen. «Sieht ganz danach aus.
                  Auf jeden Fall hat sie das verschwundene Jesuskind aus dem Trott herausgerissen»,
                  gibt Josef zur Antwort und beobachtet nachdenklich die Menschen-Familie, die ratlos auf dem Sofa
                  sitzt.
                  Mit einem tiefen Seufzer steht die Mutter irgendwann auf. «Ich muss noch Geschenke einpacken.»
                  Auch der Sohn murmelt etwas Unverständliches und verlässt das Zimmer. Der Vater streicht seiner
                  Tochter kurz über die Haare und geht zurück an die Arbeit.
                  Das kleine Mädchen bleibt allein zurück. Eigentlich will es die Suche noch nicht aufgeben – aber wo
                  könnte es überhaupt noch stöbern?
                  Traurig setzt es sich vor der Krippe auf den Boden und stützt das Kinn auf die Hand. «Wisst ihr
                  Krippenfiguren vielleicht,
                  wo sich das Jesuskind versteckt hält?», murmelt das Mädchen mit düsterer Miene. «Wir brauchen ihn
                  doch für Weihnachten,
                  und er lässt sich einfach nicht finden.» Die Krippenfiguren schauen sich stumm an. Maria gibt sich
                  einen Ruck.
                  Mit sanfter Stimme flüstert sie dem Mädchen ins Ohr: «Keine Bange! Das Jesuskind wird auftauchen.
                  Halte nur nach ihm Ausschau.»
                  Verwundert hebt das Mädchen den Kopf und beäugt die Krippenfiguren. Still stehen diese da und
                  strahlen ihre Zuversicht aus.
                  Schliesslich nickt das Mädchen vertrauensvoll und verabschiedet sich.
              </p>
              <p>
                  Der Weihnachtsabend scheint düster zu werden. Die Mutter ist verstimmt, weil keine Jesusfigur
                  vorhanden ist. Der Vater ist zornig, weil er mittlerweile zum Schluss gekommen ist,
                  dass die Katze das Jesuskind gefressen haben muss. Und der Sohn missgelaunt,
                  weil er erneut an einer «Ganz-Wohnungs-Suche» nach der Krippenfigur teilnehmen musste.
                  Einzig die Tochter bleibt frohen Mutes. «Jesus wird sicher bald auftauchen.
                  Wir müssen nur die Augen offenhalten», wiederholt sie Marias Worte.
              </p>
              <p>
                  Der Tag vergeht, und bald dämmert es. Voller Vorfreude, dass sie nun bald das Jesuskind finden werden,
                  zieht das Mädchen ihre Eltern und den Bruder ins Wohnzim- mer. Die Kerzen am Weihnachtsbaum werden
                  entzündet, und nun kommt doch festliche Stimmung auf.
                  Die Familie lässt sich von der Freude des Mädchens anstecken und singt fröhlich – und etwas
                  schief – ihre traditionellen Weihnachtslieder.
                  Als sie mit dem «Stern von Bethlehem» beginnen, winkt Maria dem kleinen Stern über dem Stall zu.
                  «Pst, Sternchen. Dein Einsatz!
              </p>
              <p>
                  Der Weihnachtsstern über dem Stall beginnt zu leuchten und strahlt immer heller.
                  Mit aller Kraft sendet er sein Licht über den Krippenfiguren aus bis zum Sofa,
                  wo die Familie beisammensitzt. Mitten im Lied verstummt plötzlich die helle Stimme des Mädchens.
                  Ein Strahlen huscht über sein Gesicht. «Schaut doch ...!»
                  Nun werden auch die anderen ruhig und blicken verwundert auf die kleine Krippe unter dem Weihnachtsbaum.
                  Sie leuchtet und funkelt in dieser Weihnachtsnacht.
              </p>
              <p>
                  Und dort inmitten der übrigen Krippenfiguren liegt das Jesuskind.
                  Ganz so, als hätte es nur darauf gewartet, dass die Menschen-Familie ihre Augen öffnet.
              </p>
              <p>
                  «Tja! Sieht so aus, als hätte das Jesuskind uns gefunden», bemerkt der Vater verschmitzt.
                  In Gedanken versunken fügt er hinzu:
                  «Das passt eigentlich ganz gut, denkt ihr nicht auch?
                  Advent gibt uns bewusst Zeit mit offenen Augen auf das Jesuskind zu warten.»
                  Die Mutter stimmt mit einem kleinen Lächeln zu.
                  «Nächste Weihnachten werden wir das bestimmt nicht mehr vergessen.»
                  Sie legt ihren Arm um das Mädchen und drückt es liebevoll.
                  «Dann lasst uns zum Schluss noch die Weihnachtsgeschichte hören.
                  Mit offenen Augen und Herzen diesmal», spricht sie, und der Vater holt nickend die Bibel hervor.
                  Andächtig lauschen auch die Krippenfiguren den altbekannten Worten aus dem Lukasevangelium.
                  Der Esel schnaubt zufrieden: «Wie immer hast du richtiggelegen, Joe.
                  Das waren denkwürdige Weihnachten!»
                  Josef und Maria lachen und sehen zu dem kleinen, aber riesigen Geschenk in der Krippe, welches hell in
                  ihrer Mitte strahlt.
              </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Zurück
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
