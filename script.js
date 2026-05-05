// Μεταφράσεις παραγράφων
const translations = {
    1: "Ευλογημένος να είναι ο Θεός μας, πάντοτε, τώρα και πάντα, και στους αιώνες των αιώνων",
    2: "Στο όνομα του Πατέρα και του Υιού και του Αγίου Πνεύματος. Δόξα σε Σένα τον Θεό μας, Δόξα σε Σένα. Βασιλιὰ οὐράνιε, Παράκλητε, Πνεῦμα Ἅγιο, ποὺ ἀπὸ Σένα πηγάζει ἡ ἀλήθεια· ποὺ βρίσκεσαι παντοῦ καὶ μὲ τὴν παρουσία Σου γεμίζεις τὰ πάντα· Ἐσὺ ποὺ εἶσαι ὁ θησαυρὸς καὶ ἡ πηγὴ κάθε ἀγαθοῦ καὶ δωρίζεις τὴ ζωή, ἔλα καὶ κατοίκησε μέσα μας, καὶ καθάρισέ μας ἀπὸ τὰ στίγματα τῆς ἁμαρτίας καὶ σῶσε τὶς ψυχές μας.",
    3: "Ἅγιος εἶσαι Θεὲ (Πατέρα μας), Ἅγιος εἶσαι (Υἱὲ) Δυνατέ, Ἅγιο εἶσαι Ἀθάνατο (Πνεῦμα), ἐλέησέ μας (3 φορές). Δόξα στὸν Πατέρα, στὸν Υἱὸ καὶ στὸ Ἅγιο Πνεῦμα. Καὶ τώρα καὶ πάντοτε καὶ στοὺς ἀπέραντους αἰῶνες. Ἀμήν.Παναγία Τριάδα, ἐλέησέ μας, Κύριε (Θεὲ Πατέρα) δεῖξε εὐσπλαγχνία γιὰ τὶς ἁμαρτίες μας. Δέσποτα (Υἱὲ) συγχώρεσε τὶς ἀνομίες μας. Ἅγιο (Πνεῦμα) ἐπίσκεψε καὶ θεράπευσε τὶς ἀδυναμίες μας, χάρη τοῦ ὀνόματός Σου. Κύριε ἐλέησε, Κύριε ἐλέησε, Κύριε ἐλέησε. Δόξα... Καὶ τώρα... Ἐπουράνιε Πατέρα μας, ἂς εἶναι δοξασμένο καὶ ἁγιασμένο τὸ ὄνομά Σου. Ἂς ἔλθει ἡ βασιλεία Σου, ἂς γίνει τὸ θέλημά Σου, ὅπως στὸν οὐρανὸ ἔτσι καὶ στὴ γῆ. Δῶσε μας καὶ σήμερα τὴν ἀπαραίτητη γιὰ τὴ συντήρησή μας τροφή, καὶ συγχώρεσε τὶς ἁμαρτίες μας, ὅπως κι ἐμεῖς συγχωροῦμε ὅσους μᾶς ἀδικοῦν. Καὶ μὴν ἐπιτρέψεις νὰ πέσουμε σὲ πειρασμὸ (ποὺ προέρχεται ἀπὸ τὴ δική μας διάθεση), ἀλλὰ φύλαξέ μας κι ἀπὸ τοὺς πειρασμοὺς ποὺ προέρχονται ἀπὸ τὸν πονηρὸ (τὸ διάβολο).",
    4: "Διότι δική σου είναι η βασιλεία και η δύναμη και η δόξα, του Πατρός και του Υιού και του Αγίου Πνεύματος, τώρα και πάντα και στους αιώνες των αιώνων",
    5: "Κύριε ἐλέησε (12 φορές). Δόξα... Καὶ τώρα...Ἐλᾶτε νὰ προσκυνήσουμε καὶ νὰ πέσουμε εὐλαβικὰ στὰ πόδια τοῦ Βασιλιᾶ μας Θεοῦ. Ἐλᾶτε νὰ προσκυνήσουμε καὶ νὰ πέσουμε εὐλαβικὰ στὰ πόδια τοῦ Χριστοῦ, τοῦ Βασιλιᾶ μας Θεοῦ. Ἐλᾶτε νὰ προσκυνήσουμε καὶ νὰ πέσουμε εὐλαβικὰ στὰ πόδια τοῦ Χριστοῦ, τοῦ Βασιλιᾶ καὶ Θεοῦ μας. (3 μετάνοιες κι ἀμέσως τοὺς Ψαλμοὺς)·",
    6: "Ἐλέησέ με, Θεέ μου, σύμφωνα μὲ τὸ ἄπειρο ἔλεός Σου, καὶ μὲ τὴν ἀπέραντη εὐσπλαγχνία Σου ἐξάλειψε τὴ μεγάλη ἁμαρτία μου. Ἀκόμη περισσότερο, πλύνε με ἀπὸ τὸ ρύπο τῆς ἀνομίας μου κι ἀπὸ τὴν ἁμαρτία μου καθάρισέ με. Γιατὶ ἔχω συναίσθηση τῆς ἀνομίας μου καὶ ἡ ἁμαρτία μου βρίσκεται πάντοτε μπροστά μου. Σ᾿ Ἐσένα μόνο ἁμάρτησα καὶ τὶς ἁμαρτωλές μου πράξεις ἐνώπιόν Σου διέπραξα, γιὰ νὰ δικαιωθεῖς ἔτσι γιὰ τὶς ἀποφάσεις Σου γιὰ μένα καὶ ἐξέλθεις νικητὴς ὅταν Σὲ κατακρίνουν (χωρὶς νὰ γνωρίζουν). (Ἐλέησέ με) γιατὶ νά, ἀπὸ τὴ στιγμὴ τῆς συλλήψεώς μου ὡς ἔμβρυο, φέρω κληρονομικὴ τὴ ροπὴ πρὸς τὴν ἁμαρτία. Μὲ τὸ προπατορικὸ ἁμάρτημα καὶ μὲ τὴν κλίση στὴν ἁμαρτία μὲ κυοφόρησε καὶ μὲ γέννησε ἡ μητέρα μου. Ὅμως Ἐσὺ ἀγάπησες μονάχα τὴν ἀλήθεια καὶ μοῦ φανέρωσες τὰ ἄγνωστα καὶ ἀπόκρυφα μυστήρια τῆς σοφίας Σου. Θὰ μὲ ραντίσεις μὲ τὸ ἔλεός σου σὰν μὲ φύλλα τοῦ ἀρωματικοῦ φυτοῦ ὑσσώπου καὶ θὰ καθαριστῶ. Θὰ μὲ πλύνεις μὲ τὴ χάρη Σου καὶ θὰ γίνω πιὸ λευκὸς καὶ ἀπὸ τὸ χιόνι. Θὰ μὲ κάνεις νὰ αἰσθανθῶ ἀγαλλίαση καὶ εὐφροσύνη, θὰ ἀγαλλιάσουν καὶ τὰ κόκαλά μου, ποὺ ταπεινώθηκαν (ἀπὸ τὶς ἁμαρτίες μου). Στρέψε μακριὰ τὸ πρόσωπό Σου ἀπὸ τὶς ἁμαρτίες μου, καὶ ἐξαφάνισε ὅλες τὶς ἀνομίες μου. Κτίσε μέσα μου καρδιὰ καθαρή, Θεέ μου, καὶ μὲ πνεῦμα εὐθύτητας καὶ εἰλικρίνειας ἀνακαίνισέ με ἐσωτερικά. Μὴ μὲ ἀποδιώξεις ἀπὸ τὸ πρόσωπό Σου καὶ μὲ περιφρονήσεις, καὶ μὴ μοῦ ἀφαιρέσεις τὸ Πνεῦμα Σου τὸ Ἅγιο. Δώρησέ μου ξανὰ τὴν ἀγαλλίαση ποὺ δίνει ἡ σωτηρία Σου καὶ μὲ διάθεση καὶ θέληση ἰσχυρὴ στήριξέ με. Θὰ διδάξω σ᾿ ὅλους ὅσοι παραβαίνουν τὸ νόμο Σου τὴν ὁδὸ τῶν ἐντολῶν Σου καὶ θὰ ἐπιστρέψουν οἱ ἁμαρτωλοὶ σ᾿ Ἐσένα. Ἐλευθέρωσέ με ἀπὸ τὴν ἐνοχὴ τῶν αἱμάτων ποὺ ἔχυσα, Θεέ μου, Θεὲ τῆς σωτηρίας μου. Τότε ἡ γλώσσα μου θὰ ἀγαλλιάσει καὶ θὰ ὑμνήσει τὴ δικαιοσύνη Σου. Κύριε, τὰ κλεισμένα ἀπὸ τὴ ντροπὴ χείλη μου θ᾿ ἀνοίξεις καὶ τὸ στόμα μου θὰ σὲ αἰνέσει. Γιατὶ ἂν ἐπιθυμοῦσες θυσία ὑλικὴ θὰ στὴν εἶχα προσφέρει. Ὅμως Ἐσένα δὲ Σὲ ἱκανοποιοῦν οἱ θυσίες τῶν ζώων ποὺ καίγονται στὸ θυσιαστήριο. Θυσία ἀρεστὴ σ᾿ Ἐσένα εἶναι τὸ συντετριμμένο γιὰ τὶς ἁμαρτίες της πνεῦμα· Ὁ Θεὸς ποτὲ δὲν θὰ ἀπορρίψει τὴ συντετριμμένη καὶ ταπεινωμένη καρδιά. Δεῖξε τὴν καλή Σου θέληση, Κύριε, καὶ τὴν ἀγάπη Σου καὶ πρὸς τὴ Σιών, κι ἂς χτιστοῦν τὰ τείχη τῆς Ἱερουσαλήμ. Τότε θὰ εὐαρεστηθεῖς νὰ δεχτεῖς μαζὶ μὲ τὴν πνευματική μας θυσία καὶ τὶς ὑλικὲς θυσίες, ὅπως εἶναι οἱ προσφορὲς τῶν καρπῶν καὶ οἱ θυσίες ζώων στὸ θυσιαστήριο. Τότε θὰ ἀνεβάσουν στὸ θυσιαστήριό Σου μοσχάρια γιὰ νὰ προσφερθοῦν θυσία σ᾿ Ἐσένα.",
    7: "Θεέ μου, πρόσεξέ με γιὰ νὰ Σὲ ἔχω βοηθό μου. Κύριε ἔλα γρήγορα νὰ μὲ βοηθήσεις. Ἂς ντροπιαστοῦν κι ἂς ἐξευτελιστοῦν αὐτοὶ ποὺ ζητοῦν τὴν ψυχή μου. Ἂς ὀπισθοχωρήσουν κι ἂς καταντροπιαστοῦν αὐτοὶ ποὺ θέλουν νὰ μοῦ κάνουν κακό. Ἂς ὀπισθοχωρήσουν γεμάτοι ντροπὴ ὅσοι λέγουν· θαυμάσια, ὡραῖα (δηλ. χαίρονται μὲ τὴ δυστυχία μου). Ἀντίθετα μ᾿ αὐτούς, ἂς ἀγαλλιάσουν καὶ ἂς εὐφρανθοῦν χάρη σ᾿ Ἐσένα Θεέ μας, ὅσοι σὲ ἐπιζητοῦν στὴ ζωή τους· καὶ ὅσοι ποθοῦν κι ἐπιθυμοῦν τὴ σωτηρία τους ἂς λέγουν διαρκῶς· Ἂς μεγαλύνεται καὶ δοξάζεται ὁ Κύριος. Ἐγὼ ὅμως εἶμαι φτωχὸς καὶ ταλαίπωρος· βοήθησέ με Θεέ μου. Βοηθός μου καὶ λυτρωτής μου εἶσαι Κύριε, μὴν ἀργήσεις νὰ σπεύσεις.",
    8: "Κύριε εἰσάκουσε τὴν προσευχή μου. Πρόσεξε τὴ δέησή μου, Ἐσὺ ποὺ τηρεῖς τὴν ὑπόσχεσή Σου· εἰσάκουσέ με ὡς δίκαιος ποὺ εἶσαι. Καὶ μὴ θελήσεις νὰ κρίνεις ἐμένα τὸ δοῦλο σου, γιατὶ κανένας ἀπ᾿ ὅσους ζοῦν δὲ θὰ βρεθεῖ δίκαιος μπροστά Σου. (Εἰσάκουσέ με Κύριε) γιατὶ ὁ ἐχθρὸς κατεδίωξε καὶ πολέμησε τὴν ψυχὴ μου. Ταπείνωσε κι ἔριξε στὴ γῆ τὴν ὕπαρξή μου, μ᾿ ἔκανε νὰ νιώθω ὅτι ζῶ στὸ σκοτάδι, ὅπως εἶναι ὅλοι οἱ νεκροί· κυριεύθηκε ἀπὸ ὀλιγοψυχία τὸ πνεῦμα μου καὶ ταράχθηκε ἡ καρδιά μου μέσα μου. Τότε θυμήθηκα τὶς παλιὲς εὐτυχισμένες μέρες, προσήλωσα τὴ σκέψη μου σ᾿ ὅλα ὅσα ἔκανες γιὰ μένα, μελέτησα τὰ ἔργα τῶν χεριῶν Σου. Ὕψωσα τὰ χέρια μου ἱκετευτικὰ σ᾿ Ἐσένα· ἡ ψυχή μου Σὲ δίψησε ὅπως ἡ ξεραμένη γῆ ζητᾶ νερὸ νὰ ποτιστεῖ. Εἰσάκουσέ με ὅσο πιὸ γρήγορα γίνεται Κύριε, τὸ πνεῦμα μου μ᾿ ἐγκαταλείπει. Μὴν ἀποστρέψεις ἀπὸ ἐμένα τὸ πρόσωπό Σου, γιατὶ θὰ μοιάσω στοὺς νεκροὺς ποὺ θάβονται στὸ λάκκο τοῦ τάφου. Κάνε νὰ νιώσω τὸ πρωὶ τὸ ἔλεός Σου, γιατὶ σ᾿ Ἐσένα στήριξα ὅλη τὴν ἐλπίδα μου. Γνώρισέ μου Κύριε τὸ δρόμο ποὺ πρέπει νὰ ἀκολουθήσω, γιατὶ σ᾿ Ἐσένα ἐμπιστεύτηκα τὴν ὕπαρξή μου. Ἐλευθέρωσέ με Κύριε ἀπὸ τοὺς ἐχθρούς μου, γιατὶ σ᾿ Ἐσένα κατέφυγα. Δίδαξέ με νὰ πράττω τὸ θέλημά Σου, γιατὶ Ἐσὺ εἶσαι ὁ Θεός μου. Τὸ Πνεῦμα Σου τὸ Ἀγαθὸ ἂς μὲ ὁδηγήσει σὲ τόπο ἴσιο (χωρὶς ἐμπόδια γιὰ τὴν ἄσκηση τῆς ἀρετῆς). Χάρη στὸ ὄνομά Σου Κύριε θὰ μὲ ἀναζωογονήσεις. Μὲ τὴ δικαιοσύνη Σου θὰ βγάλεις ἀπ᾿ τὴν θλίψη τὴν ψυχή μου, καὶ μὲ τὸ ἔλεος ποὺ θὰ μοῦ δείξεις, θὰ ἐξοντώσεις τοὺς ἐχθρούς μου καὶ θὰ ἀφανίσεις ὅλους ὅσοι θλίβουν τὴν ψυχή μου, γιατὶ ἐγὼ εἶμαι πιστός Σου δοῦλος (ἀφοσιωμένος).",
    9: "Δόξα στὸ Θεὸ ποὺ βρίσκεται ψηλὰ στὸν οὐρανό, καὶ στὴ γῆ ἂς ἔλθει ἡ εἰρήνη Του, στοὺς ἀνθρώπους ἡ εὔνοιά Του. Σὲ ὑμνοῦμε, Σὲ εὐλογοῦμε, Σὲ προσκυνοῦμε, Σὲ δοξολογοῦμε καὶ Σὲ εὐχαριστοῦμε γιὰ τὴ μεγάλη Σου δόξα. Κύριε Βασιλιά μας, ἐπουράνιε Θεέ μας, Πατέρα παντοκράτορα· Κύριε Ἰησοῦ Χριστέ, Υἱὲ τοῦ Θεοῦ μονογενή, καὶ Πανάγιο Πνεῦμα, Κύριε Ἰησοῦ Χριστέ, Θεέ μας, Ἐσὺ ποὺ εἶσαι ὁ Ἀμνὸς τοῦ Θεοῦ (ποὺ θυσιάστηκε γιὰ τὴ σωτηρία τοῦ κόσμου), ὁ Υἱὸς τοῦ Πατρός, ποὺ σηκώνεις γιὰ νὰ ἐξαλείψεις τὶς ἁμαρτίες τοῦ κόσμου, ἐλέησέ μας, Ἐσὺ ποὺ σηκώνεις τὶς ἁμαρτίες τοῦ κόσμου. Δέξου εὐσπλαγχνικὰ τὴν ἱκεσία μας, Ἐσὺ ποὺ κάθεσαι (μετὰ τὴν Ἀνάληψή Σου) δοξασμένος στὰ δεξιὰ τοῦ Πατέρα Σου καὶ ἐλέησέ μας. Γιατὶ Ἐσύ, Ἰησοῦ Χριστέ μας, εἶσαι ὁ μόνος (ἀπόλυτα) Ἅγιος, Ἐσὺ εἶσαι ὁ μόνος Κύριός μας, ποὺ δοξάζεις τὸν Θεὸ Πατέρα. Ἀμήν. Κάθε βράδυ θὰ σὲ δοξολογῶ καὶ θὰ ὑμνῶ τὸ ὄνομά Σου καὶ τώρα, ἐνόσω ζῶ, καὶ στοὺς ἀπέραντους αἰῶνες. Κύριε, καταφυγὴ ἔγινες γιὰ μᾶς σ᾿ ὅλες τὶς γενιές. Γι᾿ αὐτὸ καὶ εἶπα· Κύριε, ἐλέησέ με, θεράπευσε τὴν ψυχή μου, γιατὶ ἁμάρτησα ἐνώπιόν Σου. Κύριε, κατέφυγα σ᾿ Ἐσένα· δίδαξέ με νὰ πράττω (στὴ ζωή μου) τὸ θέλημά Σου, γιατὶ Ἐσὺ εἶσαι ὁ Θεός μου. Σὲ Σένα ὑπάρχει ἡ πηγὴ τῆς ζωῆς· μέσα ἀπ᾿ τὸ δικό Σου φῶς θὰ δοῦμε κι ἐμεῖς τὸ φῶς. Συνέχισε νὰ παρέχεις τὸ ἔλεός Σου σὲ κείνους ποὺ Σὲ παραδέχονται (ὡς Θεὸ ἀληθινό). Καταξίωσέ μας, Κύριε, κατὰ τὴ διάρκεια καὶ αὐτῆς τῆς νύχτας νὰ φυλαχθοῦμε ἀπὸ τὴν ἁμαρτία. Ἂς εἶσαι εὐλογημένος Κύριε, Θεὲ τῶν πατέρων μας, καὶ ἂς ὑμνεῖται καὶ δοξάζεται τὸ ὄνομά Σου αἰώνια. Ἀμήν. Μακάρι, Κύριε, νὰ μᾶς παράσχεις τὴν εὐσπλαγχνία Σου, ἀφοῦ κι ἐμεῖς σ᾿ Ἐσένα στηρίξαμε τὶς ἐλπίδες μας. Ἂς εἶσαι εὐλογημένος Κύριε, δίδαξέ με τὸ θέλημά Σου. Ἂς εἶσαι εὐλογημένος Δέσποτα, δῶσ᾿ μου σύνεση νὰ ἐκτελῶ τὸ θέλημά Σου. Ἂς εἶσαι εὐλογημένος Ἅγιε, φώτισέ με μὲ τὶς ἐντολές Σου. Κύριε, τὸ ἔλεός Σου εἶναι αἰώνιο. Μὴν παραβλέψεις ἐμᾶς ποὺ εἴμαστε ἔργα τῶν χεριῶν Σου. Σ᾿ Ἐσένα (Τριαδικὲ Θεέ μας) ἁρμόζει αἴνεση, σ᾿ Ἐσένα ἁρμόζει ὕμνος, σ᾿ Ἐσένα ἁρμόζει δόξα, στὸν Πατέρα, στὸν Υἱὸ καὶ στὸ Ἅγιο Πνεῦμα, τώρα καὶ πάντοτε καὶ στοὺς ἀπέραντους αἰῶνες. Ἀμήν.",
    10: "Πιστεύω σὲ ἕνα Θεὸ ποὺ εἶναι ὁ Πατέρας μας, ποὺ κυβερνᾶ ὅλο τὸν κόσμο καὶ δημιούργησε τὸν οὐρανὸ καὶ τὴ γῆ, ὅλα ὅσα βλέπουμε ἀλλὰ καὶ ὅσα δὲ βλέπουμε. (Πιστεύω) καὶ σὲ ἕναν καὶ μόνον Κύριο, τὸν Ἰησοῦ Χριστό, ποὺ εἶναι Υἱὸς τοῦ Θεοῦ μονογενής, ποὺ γεννήθηκε ἀπὸ τὸν Πατέρα Του πρὶν ἀπὸ ὅλους τοὺς αἰῶνες. Εἶναι ὁ Ἴδιος (ὁ Χριστὸς) φῶς καὶ γεννήθηκε ἀπὸ τὸ φῶς (τὸν Θεὸ Πατέρα), εἶναι Θεὸς ἀληθινὸς ἀπὸ ἀληθινὸ Θεό· γεννήθηκε, δὲν δημιουργήθηκε· εἶναι ἀπὸ τὴν ἴδια οὐσία (φύση) μὲ τὸν Πατέρα Του, καὶ δι᾿ Αὐτοῦ (τοῦ Υἱοῦ) δημιουργήθηκαν τὰ πάντα. Γιὰ μᾶς τοὺς ἀνθρώπους καὶ γιὰ τὴ δική μας σωτηρία κατέβηκε ἀπὸ τοὺς οὐρανούς, ἔλαβε ἀνθρώπινη σάρκα (κυοφορήθηκε) ἀπὸ τὴν Παρθένο Μαρία διὰ τῆς ἐπελεύσεως τοῦ Ἁγίου Πνεύματος καὶ ἔγινε πραγματικὸς ἄνθρωπος. Σταυρώθηκε γιὰ μᾶς ἐπὶ ἡγεμονίας τοῦ Ποντίου Πιλάτου καὶ ἀφοῦ ἔπαθε ὡς ἄνθρωπος (καὶ πέθανε), τάφηκε. Τὴν τρίτη ἡμέρα Ἀναστήθηκε, ὅπως τὸ βεβαιώνουν οἱ Γραφές, καὶ Ἀνελήφθη μὲ δόξα στοὺς οὐρανοὺς καὶ κάθισε στὰ δεξιὰ τοῦ Θεοῦ Πατέρα Του. Θὰ ἔρθει καὶ πάλι (κατὰ τὴ Δευτέρα Παρουσία) μὲ δόξα πολλὴ γιὰ νὰ κρίνει ζῶντες καὶ νεκρούς, καὶ ἡ βασιλεία Του δὲν θὰ ἔχει τέλος. (Πιστεύω) καὶ στὸ Πνεῦμα, (ποὺ ὅπως ὁ Πατέρας καὶ ὁ Υἱὸς εἶναι) Ἅγιο, Κύριο, ζωοποιὸ καὶ ἐκπορεύεται ἀπὸ τὸν Πατέρα, συμπροσκυνεῖται καὶ συνδοξάζεται μὲ τὸν Πατέρα καὶ τὸν Υἱό, καὶ λάλησε μὲ τὸ στόμα τῶν Προφητῶν. (Πιστεύω) καὶ στὴν Ἐκκλησία, ποὺ εἶναι μία, ἁγία, καθολικὴ (ἀπευθύνεται καὶ περιλαμβάνει ὅλον τὸν κόσμο) καὶ ἀποστολικὴ (στερεώθηκε μὲ τὸ κήρυγμα τῶν Ἀποστόλων). Ὁμολογῶ τὴν πίστη μου στὸ μυστήριο τοῦ Βαπτίσματος τὸ ὁποῖο γίνεται μία φορὰ γιὰ τὴ συγχώρηση τῶν ἁμαρτιῶν. Περιμένω μὲ προσδοκία τὴν ἀνάσταση τῶν νεκρῶν καὶ τὴν ἀτέλειωτη ζωὴ (μὲ τὸν Χριστό). Ἀμήν.",
    11: "Εἶναι ἄξιο ἀληθινά, νὰ ἐγκωμιάζουμε ἐσένα τὴ Θεοτόκο, τὴν πάντοτε ἐγκωμιαζομένη καὶ πάναγνη καὶ μητέρα τοῦ Θεοῦ μας. Ἐσένα ποὺ εἶσαι πιὸ τιμημένη ἀπ᾿ τὰ Χερουβεὶμ καὶ ἀσύγκριτα πιὸ ἔνδοξη ἀπ᾿ τὰ Σεραφείμ, ποὺ χωρὶς νὰ φθαρεῖ ἡ παρθενία σου γέννησες τὸν Θεὸ Λόγο, ποὺ εἶσαι πραγματικὰ ἡ Θεοτόκος, ἐσένα μεγαλύνουμε.",
    12: "Ἅγιος εἶσαι Θεὲ (Πατέρα μας), Ἅγιος εἶσαι (Υἱὲ) Δυνατέ, Ἅγιο εἶσαι Ἀθάνατο (Πνεῦμα), ἐλέησέ μας (3 φορές). Δόξα στὸν Πατέρα, στὸν Υἱὸ καὶ στὸ Ἅγιο Πνεῦμα. Καὶ τώρα καὶ πάντοτε καὶ στοὺς ἀπέραντους αἰῶνες. Ἀμήν. Παναγία Τριάδα, ἐλέησέ μας, Κύριε (Θεὲ Πατέρα) δεῖξε εὐσπλαγχνία γιὰ τὶς ἁμαρτίες μας. Δέσποτα (Υἱὲ) συγχώρεσε τὶς ἀνομίες μας. Ἅγιο (Πνεῦμα) ἐπίσκεψε καὶ θεράπευσε τὶς ἀδυναμίες μας, χάρη τοῦ ὀνόματός Σου. Κύριε ἐλέησε, Κύριε ἐλέησε, Κύριε ἐλέησε. Δόξα... Καὶ τώρα... Ἐπουράνιε Πατέρα μας, ἂς εἶναι δοξασμένο καὶ ἁγιασμένο τὸ ὄνομά Σου. Ἂς ἔλθει ἡ βασιλεία Σου, ἂς γίνει τὸ θέλημά Σου, ὅπως στὸν οὐρανὸ ἔτσι καὶ στὴ γῆ. Δῶσε μας καὶ σήμερα τὴν ἀπαραίτητη γιὰ τὴ συντήρησή μας τροφή, καὶ συγχώρεσε τὶς ἁμαρτίες μας, ὅπως κι ἐμεῖς συγχωροῦμε ὅσους μᾶς ἀδικοῦν. Καὶ μὴν ἐπιτρέψεις νὰ πέσουμε σὲ πειρασμὸ (ποὺ προέρχεται ἀπὸ τὴ δική μας διάθεση), ἀλλὰ φύλαξέ μας κι ἀπὸ τοὺς πειρασμοὺς ποὺ προέρχονται ἀπὸ τὸν πονηρὸ (τὸ διάβολο).",
    13: "Θεέ των Πατέρων μας, που φέρεσαι πάντα με επιείκεια σε εμάς, μην απομακρύνεις το έλεός Σου από εμάς, αλλά με τις ικεσίες τους, κυβέρνησε τη ζωή μας με ειρήνη. Τους Μάρτυρες Σου που βρίσκονται σε όλο τον κόσμο, η Εκκλησία Σου στολισμένη με τα αίματά τους σαν να είναι πορφύρα και βυσσινί ύφασμα, φωνάζει σε σένα, Χριστέ ο Θεός: Στείλε στο λαό Σου τα σπλάχνα των οικτιρμών Σου, δώρισε ειρήνη στην πολιτεία Σου και στις ψυχές μας το μέγα έλεος. Δόξα Πατρί και Υιώ και Αγίω Πνεύματι. Ανάπαυσε, Χριστέ, τις ψυχές των δούλων Σου μαζί με τους Αγίους, εκεί όπου δεν υπάρχει πόνος, ούτε λύπη, ούτε στεναγμός, αλλά ζωή ατελεύτητη. Και νυν και αεί και στους αιώνες των αιώνων. Αμήν. Με την πρεσβεία, Κύριε, όλων των Αγίων και της Θεοτόκου, δώσε μας τη δική Σου ειρήνη και ελέησέ μας, ως μόνος οικτίρμων. Κύριε, ελέησον (40 φορές).",
    14: "Χριστὲ ὁ Θεός μας, Ἐσὺ ποὺ σὲ κάθε ὥρα καὶ σὲ κάθε στιγμὴ προσκυνεῖσαι καὶ δοξάζεσαι στὸν οὐρανὸ καὶ στὴ γῆ· ποὺ εἶσαι μακρόθυμος, πολυέλεος καὶ πολυεύσπλαγχνος· ποὺ ἀγαπᾶς τοὺς ἐναρέτους καὶ ἐλεεῖς τοὺς ἁμαρτωλούς· ποὺ μὲ τὴν ὑπόσχεση τῶν ἀγαθῶν τῆς μέλλουσας βασιλείας Σου προσκαλεῖς ὅλους τοὺς ἀνθρώπους (στὴ μετάνοια καὶ) στὴ σωτηρία, Ἐσὺ ὁ Ἴδιος, Κύριέ μας, δέξου καὶ τὶς δικές μας προσευχὲς ποὺ αὐτὴ τὴν ὥρα Σοῦ ἀπευθύνουμε καὶ κατεύθυνε τὴ ζωή μας ὥστε νὰ εἶναι σύμφωνη πρὸς τὶς ἐντολές Σου. Ἁγίασε τὶς ψυχές μας, ἐξάγνισε τὰ σώματά μας, διόρθωσε τοὺς λογισμούς μας, καθάρισε τὶς σκέψεις μας, καὶ φύλαξέ μας ἀπὸ κάθε θλίψη, κακὸ καὶ ὀδύνη. Περιφρούρησέ μας μὲ τοὺς ἁγίους σου Ἀγγέλους, ὥστε διαφυλαγμένοι καὶ καθοδηγούμενοι μὲ τὴν προστασία τους νὰ φτάσουμε στὴν ἑνότητα τῆς πίστεως καὶ στὴν ἐπίγνωση τῆς ἀπρόσιτης δόξας Σου· γιατὶ εἶσαι Εὐλογημένος στοὺς ἀπέραντους αἰῶνες. Ἀμήν.",
    15: "Κύριε, ἐλέησέ μας (3 φορές). Δόξα Πατρί. Καὶ νῦν. Ἐσένα ποὺ εἶσαι πιὸ τιμημένη ἀπ᾿ τὰ Χερουβεὶμ καὶ ἀσύγκριτα πιὸ ἔνδοξη ἀπὸ τὰ Σεραφείμ, ποὺ χωρὶς νὰ φθαρεῖ ἡ παρθενία σου γέννησες τὸ Θεὸ Λόγο, ποὺ εἶσαι πράγματι ἡ Θεοτόκος, Ἐσένα μεγαλύνουμε.",
    16: "Ο Θεός ας μας σπλαχνιστεί κι ας μας ευλογήσει, ας φανερώσει το πρόσωπό του σε εμάς κι ας μας ελεήσει",
    17: "Κύριε, ελέησέ μας (12 φορές). Και σώσε μας και βοήθησέ μας, Παναγία Παρθένε.",
    18: "Ἄμωμη, ἀμόλυντη, ἀδιάφθορη, ἄχραντη, ἁγνὴ Παρθένε, νύφη τοῦ Θεοῦ καὶ Δέσποινα. Ἐσὺ ποὺ μὲ τὴν ὑπέρλογη γέννα σου ἕνωσες τὸ Θεὸ Λόγο μὲ τὸ ἀνθρώπινο γένος καὶ ἐπανασύνδεσες καὶ ὕψωσες τὴν πεσμένη ἀνθρώπινη φύση μας μὲ τὸν οὐράνιο κόσμο. Ἐσύ, ἡ μοναδικὴ ἐλπίδα τῶν ἀπελπισμένων καὶ ἡ βοήθεια ἐκείνων ποὺ πολεμοῦνται (ἀπ᾿ τοὺς δαίμονες), ἡ πάντα πρόθυμη στὴν προστασία ὅσων προστρέχουν σὲ σένα, ποὺ εἶσαι τὸ καταφύγιο ὅλων τῶν χριστιανῶν· μὴ μὲ περιφρονήσεις τὸν ἁμαρτωλό, τὸν ἀκάθαρτο, ποὺ ἐξαχρείωσα τὴν ὕπαρξή μου μὲ αἰσχροὺς λογισμούς, λόγια καὶ πράξεις, καὶ ὑποδουλώθηκα ἐξαιτίας τῆς πνευματικῆς ἀμέλειας στὶς ἡδονὲς τῆς ζωῆς αὐτῆς. Ἀλλὰ ἐσύ, ὡς Μητέρα τοῦ Φιλάνθρωπου Θεοῦ μας, σπλαγχνίσου με δείχνοντας καὶ σὲ μένα τὸν ἁμαρτωλὸ καὶ ἄσωτο τὴ φιλανθρωπία σου, καὶ δέξου τὴ δέηση ποὺ σοῦ προσφέρουν τὰ ἀκάθαρτα χείλη μου· καὶ χρησιμοποιώντας τὴ μητρική σου παρρησία ἱκέτευσε θερμὰ τὸν Υἱό σου καὶ Δεσπότη μας, ν᾿ ἀνοίξει καὶ σὲ μένα τὴ φιλάνθρωπη ἀγκαλιὰ τῆς ἀγάπης Του· καὶ ἀφοῦ μοῦ συγχωρέσει τὶς ἀναρίθμητες ἁμαρτίες μου, νὰ μὲ ὁδηγήσει στὴ μετάνοια καὶ νὰ μὲ ἀναδείξει πιστὸ ἐργάτη τῶν ἐντολῶν Του. Καὶ νὰ εἶσαι, Παναγία μου, πάντοτε κοντὰ μου, ὡς ἐλεήμων καὶ συμπαθὴς καὶ σπλαγχνική, στὴν παρούσα ζωὴ ἰσχυρὴ προστασία καὶ βοήθειά μου, ἀποκρούοντας ὡς τεῖχος τὶς ἐπιθέσεις τῶν ἐχθρῶν (τῶν δαιμόνων) καὶ καθοδηγώντας με στὴ σωτηρία· καὶ ὅταν ἔλθει ἡ ὥρα τοῦ θανάτου μου, νὰ περιφρουρεῖς τὴν ἄθλια ψυχή μου καὶ νὰ ἀποδιώκεις μακριὰ ἀπ᾿ αὐτὴ τὰ σκοτεινὰ πρόσωπα τῶν πονηρῶν δαιμόνων. Καὶ κατὰ τὴ φοβερὴ ἡμέρα τῆς Κρίσεως νὰ μὲ ἀπαλλάξεις ἀπὸ τὴν καταδίκη τῆς αἰωνίας κολάσεως καὶ νὰ μὲ ἀξιώσεις νὰ κληρονομήσω καὶ συμμετάσχω στὴν ἀνέκφραστη δόξα τοῦ Υἱοῦ σου καὶ Θεοῦ μας. Αὐτῆς τῆς δόξας μακάρι κι ἐγὼ νὰ γίνω κληρονόμος μὲ τὴ μεσιτεία καὶ τὴ βοήθειά σου Δέσποινα· ἀλλὰ καὶ μὲ τὴ χάρη καὶ τὴ φιλανθρωπία τοῦ Κυρίου καὶ Θεοῦ καὶ Σωτήρα μας Ἰησοῦ Χριστοῦ, στὸν Ὁποῖο ἀνήκει ὅλη ἡ δόξα καὶ ἡ τιμὴ καὶ ἡ προσκύνηση, καθὼς καὶ στὸν ἄναρχο Πατέρα Του καὶ στὸ Πανάγιο καὶ ἀγαθὸ καὶ ζωοποιὸ Πνεῦμα Του, τώρα καὶ σὲ κάθε στιγμὴ καὶ στοὺς ἀπέραντους αἰῶνες. Ἀμήν.",
    19: "Καὶ δῶσε μας, Κύριε, τώρα ποὺ πρόκειται νὰ κοιμηθοῦμε, ἀνάπαυση στὸ σῶμα καὶ στὴν ψυχή μας· καὶ διαφύλαξέ μας ἀπὸ τὸν σκοτεινὸ ὕπνο τῆς ἁμαρτίας κι ἀπὸ κάθε σκοτεινὴ καὶ νυκτερινὴ ἡδονὴ ποὺ διεγείρει τὰ πάθη μας. Παῦσε τὶς ὁρμὲς τῶν παθῶν, σβῆσε τὰ πύρινα βέλη (τοὺς πειρασμοὺς) ποὺ τοξεύει μὲ δολιότητα ἐναντίον μας ὁ πονηρός. Κατάστειλε τὶς σαρκικὲς ὁρμές μας καὶ ἀποκοίμησε κάθε γήινη καὶ ὑλικὴ (μάταιη) ἐπιθυμία μας. Δώρισέ μας, Θεέ μας, ἄγρυπνο νοῦ, καθαρὸ λογισμό, καρδιὰ προσεκτική, ὕπνο ἐλαφρό, ἀπαλλαγμένο ἀπὸ κάθε δαιμονικὴ φαντασία. Μὲ προθυμία νὰ σηκωθοῦμε ὅταν ἔλθει ἡ ὥρα τῆς προσευχῆς, στηριγμένοι στὶς ἐντολές Σου καὶ ἔχοντας σταθερὴ μέσα μας τὴν ἐνθύμηση τῶν προσταγμάτων Σου. Χάρισέ μας τὴν ὁλοπρόθυμη διάθεση τῆς ὁλονύχτιας δοξολογίας Σου, γιὰ νὰ ὑμνοῦμε καὶ εὐλογοῦμε καὶ δοξάζουμε τὸ ἀξιότιμο καὶ μεγαλόπρεπο ὄνομά Σου, τοῦ Πατέρα καὶ τοῦ Υἱοῦ καὶ τοῦ Ἁγίου Πνεύματος, τώρα καὶ σὲ κάθε στιγμὴ καὶ στοὺς ἀπέραντους αἰῶνες. Ἀμήν.",
    20: "Ὑπερένδοξη, Ἀειπάρθενη, εὐλογημένη Θεοτόκε μετάφερε τὴν προσευχὴ μας στὸν Υἱό σου καὶ Θεό μας καὶ ζήτησέ Του νὰ σώσει μὲ τὶς δικές σου πρεσβεῖες τὶς ψυχές μας. Ἡ ἐλπίδα μου εἶναι ὁ Πατέρας, καταφυγή μου ὁ Υἱός, σκέπη (προστασία) μου τὸ Ἅγιο Πνεῦμα. Δόξα σ᾿ Ἐσένα Πανάγιε Τριαδικὲ Θεέ μας. Ὅλη τὴν ἐλπίδα μου σ᾿ ἐσένα ἐμπιστεύομαι, Μητέρα τοῦ Θεοῦ, φύλαξέ με κάτω ἀπὸ τὴ σκέπη (προστασία) σου.",
    21: "Σε εσένα χαίρεται, ω Κεχαριτωμένη, όλη η πλάση: το σύνολο των Αγγέλων και το γένος των ανθρώπων. Εσύ που είσαι ναός αγιασμένος και παράδεισος πνευματικός, το καύχημα των παρθένων. Από εσένα σαρκώθηκε ο Θεός και έγινε παιδί Εκείνος που υπήρχε πριν από όλους τους αιώνες, ο Θεός μας. Γιατί τη δική σου μήτρα την έκανε θρόνο Του και την κοιλιά σου την κατασκεύασε πλατύτερη από τους ουρανούς. Σε εσένα χαίρεται, ω Κεχαριτωμένη, όλη η κτίση· δόξα σε Σένα.",
    22: "Άγιε Άγγελε, εσύ που είσαι φύλακας (προστάτης) της αθλίας ψυχής μου και της ταλαίπωρης ζωής μου, μή με εγκαταλείψης τον αμαρτωλό, μήτε να απομακρυνθής από μένα εξ αιτίας της χαυνότητός μου. Μή επιτρέψης στον πονηρό δαίμονα να κυριαρχήσει επάνω μου κατατυραννώντας αυτό το θνητό μου σώμα. Κράτησε το ταλαίπωρο και παράλυτο χέρι μου και οδήγησέ με στην οδό της σωτηρίας. Ναι, άγιε Άγγελε του Θεού, εσύ που είσαι φύλακας και σκεπαστής της αθλίας ψυχής μου και του αθλίου σώματός μου, συγχώρησέ με για όλα εκείνα με τα οποία σε ελύπησα όλες τις ημέρες της ζωής μου, και για όσα αμάρτησα την σημερινή ημέρα. Σκέπασέ με και τούτη τη νύκτα και διαφύλαξέ με από κάθε επήρεια του αντιπάλου διαβόλου, για να μή παροργίσω τον Θεό με κάποιο αμάρτημα. Και συνάμα πρέσβευε για χάρι μου προς τον Κύριο, να με στερεώση στον θείο φόβο (=σεβασμό) και να με κάνη δούλο άξιο της αγαθότητός του. Αμήν.",
    23: "Σε εσένα, την Υπεραγία Θεοτόκο, που μάχεσαι για εμάς και μας υπερασπίζεσαι, ως λυτρωμένη από τα δεινά, η Πόλη σου αναγράφει τα νικητήρια ευχαριστήρια. Αλλά, καθώς έχεις δύναμη αήττητη, ελευθέρωσέ με από κάθε είδους κινδύνους, για να σου φωνάζω: Χαίρε, Νύμφη ανύμφευτε!",
    24: "Χαίρε, Θεοτόκε Παρθένε Μαρία, που είσαι γεμάτη με τη χάρη του Θεού, ο Κύριος είναι μαζί σου. Είσαι ευλογημένη ανάμεσα σε όλες τις γυναίκες και ευλογημένος είναι ο καρπός της κοιλιάς σου, γιατί γέννησες τον Σωτήρα των ψυχών μας",
    25: "Θεοτόκε, ο Γαβριήλ έμεινε έκπληκτος αντικρίζοντας την ομορφιά της παρθενίας Σου και την υπέρλαμπρη αγνότητά Σου, και Σου φώναζε: Ποιον αντάξιο ύμνο να Σου προσφέρω; Και πώς να Σε ονομάσω; Απορώ και μένω εκστατικός! Γι' αυτό, όπως με διέταξαν, Σου φωνάζω: Χαίρε, Συ που είσαι γεμάτη από τη Χάρη του Θεού (Κεχαριτωμένη)",
    26: "Με τις ευχές των Αγίων Πατέρων μας, Κύριε Ιησού Χριστέ, ο Θεός μας, ελέησε και σώσε εμάς. Αμήν."
};

// Κείμενο από το markdown
const markdownContent = `# Μικρό Απόδειπνο

## Παράγραφος 1
Δεῦτε φάγωμεν ἄρτον καὶ πίωμεν οἶνον, ὃν ἐκέρασεν ἡ Σοφία· ἑαυτῆς τράπεζαν προέθηκε, κηρύττουσα μετὰ ὑψηλοῦ κηρύγματος, ἐπὶ κρατῆρα οἴνου, λέγουσα·

## Παράγραφος 2
Ὅστις ἐστὶν ἄφρων, ἐκκλινάτω πρός με· καὶ τοῖς ἐνδεέσι φρενῶν εἶπεν·

## Παράγραφος 3
Ἔλθετε, φάγετε τὸν ἐμὸν ἄρτον, καὶ πίετε οἶνον, ὃν ἐκέρασα ὑμῖν.

## Παράγραφος 4
Ἀπολίπετε ἀφροσύνην, καὶ ζήσεσθε· καὶ ζητήσατε φρόνησιν, ἵνα βιώσητε· καὶ κατορθώσατε ἐν γνώσει σύνεσιν.

## Παράγραφος 5
Ἀπολίπετε ἀφροσύνην, καὶ ζήσεσθε· καὶ ζητήσατε φρόνησιν, ἵνα βιώσητε· καὶ κατορθώσατε ἐν γνώσει σύνεσιν.
`;

// Φόρτωση ρυθμίσεων από localStorage
function loadSettings() {
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedTranslationEnabled = localStorage.getItem('translationEnabled');
    const savedFont = localStorage.getItem('fontFamily');
    const savedTranslationMode = localStorage.getItem('translationMode');
    
    return {
        theme: savedTheme || 'light',
        fontSize: savedFontSize ? parseInt(savedFontSize) : 18,
        translationEnabled: savedTranslationEnabled === 'true',
        fontFamily: savedFont || 'georgia',
        translationMode: savedTranslationMode || 'popup'
    };
}

// Αποθήκευση ρυθμίσεων στο localStorage
function saveSettings() {
    localStorage.setItem('theme', currentTheme);
    localStorage.setItem('fontSize', currentFontSize);
    localStorage.setItem('translationEnabled', translationEnabled);
    localStorage.setItem('fontFamily', currentFont);
    localStorage.setItem('translationMode', translationMode);
}

// Αρχικοποίηση με αποθηκευμένες ρυθμίσεις
const settings = loadSettings();
let currentFontSize = settings.fontSize;
let currentTheme = settings.theme;
let translationEnabled = settings.translationEnabled;
let currentFont = settings.fontFamily;
let translationMode = settings.translationMode;

// Font mapping
const fontFamilies = {
    georgia: "'Georgia', 'Times New Roman', serif",
    palatino: "'Palatino Linotype', 'Palatino', serif",
    garamond: "'Garamond', serif",
    times: "'Times New Roman', 'Times', serif"
};

// Εφαρμογή αρχικών ρυθμίσεων
document.body.dataset.theme = currentTheme;
document.body.dataset.translationMode = translationMode;
document.documentElement.style.setProperty('--font-size', `${currentFontSize}px`);
document.documentElement.style.setProperty('--font-family', fontFamilies[currentFont]);

// Φόρτωση του περιεχομένου
async function loadContent() {
    console.log('loadContent called');
    const content = document.getElementById('content');
    console.log('content element:', content);
    
    try {
        console.log('Trying to fetch mikro-apodeipno.md');
        // Προσπάθεια φόρτωσης από το αρχείο markdown
        const response = await fetch('mikro-apodeipno.md', {
            cache: 'no-cache',
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        });
        console.log('Fetch response:', response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        const markdownText = await blob.text();
        console.log('Markdown text loaded, length:', markdownText.length);
        console.log('First 100 chars:', markdownText.substring(0, 100));
        parseMarkdown(markdownText, content);
    } catch (error) {
        console.warn('Δεν μπόρεσε να φορτωθεί το αρχείο markdown, χρησιμοποιείται το hardcoded περιεχόμενο:', error);
        // Χρησιμοποίηση του hardcoded περιεχομένου
        parseMarkdown(markdownContent, content);
    }
}

function parseMarkdown(markdownText, content) {
    console.log('Parsing markdown, length:', markdownText.length);
    const lines = markdownText.split('\n');
    console.log('Total lines:', lines.length);
    
    let currentParagraph = null;
    let paragraphNumber = 0;
    
    lines.forEach((line, index) => {
        console.log(`Line ${index}: "${line}"`);
        if (line.startsWith('# ')) {
            // Κύριος τίτλος - ήδη υπάρχει στο header
            console.log('Title line, ignored');
        } else if (line.startsWith('## ')) {
            paragraphNumber++;
            console.log(`Creating paragraph ${paragraphNumber}`);
            currentParagraph = document.createElement('div');
            currentParagraph.className = 'paragraph';
            currentParagraph.dataset.paragraph = paragraphNumber;
            
            const headingText = line.replace('## ', '').trim();
            
            // Προσθήκη heading μόνο αν υπάρχει κείμενο
            if (headingText) {
                const heading = document.createElement('h2');
                heading.textContent = headingText;
                
                // Προσθήκη ID για bookmarks
                if (headingText.includes('Ψαλμός Ν')) {
                    currentParagraph.id = 'psalm-50';
                } else if (headingText.includes('Ψαλμός ΞΘ')) {
                    currentParagraph.id = 'psalm-69';
                } else if (headingText.includes('Ψαλμός ΡΜΒ')) {
                    currentParagraph.id = 'psalm-142';
                } else if (headingText.includes('Mικρά Δοξολογία')) {
                    currentParagraph.id = 'doxology';
                } else if (headingText.includes('Σύμβολον τῆς Πίστεως')) {
                    currentParagraph.id = 'creed';
                } else if (headingText.includes('Ἄξιόν Ἐστιν')) {
                    currentParagraph.id = 'axion-estin';
                } else if (headingText.includes('κοντάκιον') || headingText.includes('τροπάρια')) {
                    currentParagraph.id = 'troparia';
                } else if (headingText.includes('Εὐχὴ τῶν Ὡρῶν')) {
                    currentParagraph.id = 'prayer-hours';
                } else if (headingText.includes('Εὐχὴ εἰς τὸν φύλακα')) {
                    currentParagraph.id = 'guardian-angel';
                } else if (headingText.includes('Τῇ Ὑπερμάχῳ')) {
                    currentParagraph.id = 'hypermacho';
                }
                
                currentParagraph.appendChild(heading);
            }
            
            content.appendChild(currentParagraph);
        } else if (line.trim().startsWith('[BUTTON:')) {
            // Special button syntax: [BUTTON:Button Text]
            const buttonText = line.trim().match(/\[BUTTON:(.+)\]/)?.[1];
            if (buttonText) {
                console.log('Creating button:', buttonText);
                const buttonContainer = document.createElement('div');
                buttonContainer.className = 'button-container';
                buttonContainer.id = 'theotokos-button';
                
                const button = document.createElement('button');
                button.className = 'content-button';
                button.textContent = buttonText;
                button.dataset.action = 'open-theotokos';
                
                buttonContainer.appendChild(button);
                content.appendChild(buttonContainer);
            }
        } else if (line.trim() && currentParagraph) {
            console.log('Adding p to current paragraph');
            
            // Add IDs for paragraphs without headings
            if (line.includes('Ἅσπιλε, Ἀμόλυντε')) {
                currentParagraph.id = 'aspile';
            } else if (line.includes('Καὶ δὸς ἡμῖν, Δέσποτα')) {
                currentParagraph.id = 'kai-dos';
            } else if (line.includes('Είτα το κοντάκιον')) {
                currentParagraph.id = 'troparia';
            }
            
            // Normal single column - always add to paragraph
            const p = document.createElement('p');
            p.textContent = line;
            currentParagraph.appendChild(p);
        }
    });
    
    console.log('Paragraphs created:', document.querySelectorAll('.paragraph').length);
    
    // Apply side-by-side layout if needed
    applySideBySideLayout();
    
    // Προσθήκη event listeners στις παραγράφους
    document.querySelectorAll('.paragraph').forEach(para => {
        console.log('Adding click listener to paragraph', para.dataset.paragraph);
        
        // Ενημέρωση cursor style βάσει translation enabled και mode
        const shouldShowPointer = translationEnabled && translationMode === 'popup';
        para.style.cursor = shouldShowPointer ? 'pointer' : 'default';
        
        para.addEventListener('click', () => {
            // Only show popup if translation is enabled AND mode is popup
            if (translationEnabled && translationMode === 'popup') {
                const paragraphNum = parseInt(para.dataset.paragraph);
                console.log('Paragraph clicked:', paragraphNum);
                showTranslation(paragraphNum);
            }
        });
    });
}

// Ενημέρωση cursor style όταν αλλάζει το translation toggle
function updateParagraphCursors() {
    document.querySelectorAll('.paragraph').forEach(para => {
        const shouldShowPointer = translationEnabled && translationMode === 'popup';
        para.style.cursor = shouldShowPointer ? 'pointer' : 'default';
    });
}

// Εναλλαγή θέματος με switch (toggle between light and dark)
const themeSwitch = document.getElementById('themeSwitch');
const themeIcon = document.querySelector('.theme-icon');
console.log('themeSwitch element:', themeSwitch);

const themeIcons = {
    light: '☀️',
    dark: '🌕'
};

// Ενημέρωση του icon με βάση το αποθηκευμένο θέμα
if (themeIcon) {
    themeIcon.textContent = themeIcons[currentTheme] || '🌙';
}

if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
        console.log('Theme switch clicked');
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.dataset.theme = currentTheme;
        if (themeIcon) {
            themeIcon.textContent = themeIcons[currentTheme];
        }
        saveSettings();
        updateThemeButtons();
    });
}

// Dialog ρυθμίσεων
const fontSizeDialog = document.getElementById('fontSizeDialog');
const fontSizeSlider = document.getElementById('fontSizeSlider');
const fontSizeValue = document.getElementById('fontSizeValue');
const closeFontDialog = document.getElementById('closeFontDialog');
const translationToggle = document.getElementById('translationToggle');

// Ενημέρωση του slider με την αποθηκευμένη τιμή
if (fontSizeSlider && fontSizeValue) {
    fontSizeSlider.value = currentFontSize;
    fontSizeValue.textContent = currentFontSize;
}

// Ενημέρωση του translation toggle με την αποθηκευμένη τιμή
const translationModeOptions = document.getElementById('translationModeOptions');

if (translationToggle) {
    if (translationEnabled) {
        translationToggle.classList.add('active');
        if (translationModeOptions) {
            translationModeOptions.style.display = 'block';
        }
    }
    
    translationToggle.addEventListener('click', () => {
        translationEnabled = !translationEnabled;
        translationToggle.classList.toggle('active');
        
        // Show/hide translation mode options
        if (translationModeOptions) {
            translationModeOptions.style.display = translationEnabled ? 'block' : 'none';
        }
        
        saveSettings();
        updateParagraphCursors();
        updateTranslationDisplay();
    });
}

// Translation mode radio buttons
const translationModeRadios = document.querySelectorAll('input[name="translationMode"]');
translationModeRadios.forEach(radio => {
    if (radio.value === translationMode) {
        radio.checked = true;
    }
    
    radio.addEventListener('change', (e) => {
        translationMode = e.target.value;
        document.body.dataset.translationMode = translationMode;
        saveSettings();
        updateTranslationDisplay();
    });
});

function applySideBySideLayout() {
    console.log('Applying side-by-side layout');
    
    // Only apply if translation is enabled and mode is sidebyside
    if (!translationEnabled || translationMode !== 'sidebyside') {
        console.log('Skipping side-by-side: not enabled or wrong mode');
        return;
    }
    
    document.querySelectorAll('.paragraph').forEach(para => {
        const paragraphNum = parseInt(para.dataset.paragraph);
        const translationText = translations[paragraphNum];
        
        if (!translationText) return;
        
        // Check if already converted
        if (para.querySelector('.original-text')) return;
        
        // Get h2 and p elements separately
        const heading = para.querySelector('h2');
        const paragraphs = Array.from(para.querySelectorAll('p'));
        
        if (paragraphs.length === 0) return;
        
        // Create original text container
        const originalDiv = document.createElement('div');
        originalDiv.className = 'original-text';
        
        // Move all p elements to original div
        paragraphs.forEach(p => {
            originalDiv.appendChild(p.cloneNode(true));
        });
        
        // Create translation container
        const translationDiv = document.createElement('div');
        translationDiv.className = 'translation-text';
        const translationP = document.createElement('p');
        translationP.textContent = translationText;
        translationDiv.appendChild(translationP);
        
        // Remove original p elements
        paragraphs.forEach(p => p.remove());
        
        // Add both containers (h2 stays at top if exists)
        para.appendChild(originalDiv);
        para.appendChild(translationDiv);
    });
}

function updateTranslationDisplay() {
    console.log('updateTranslationDisplay called:', { translationEnabled, translationMode });
    
    const content = document.getElementById('content');
    if (content) {
        // Καταγραφή του τρέχοντος ύψους για την αποφυγή layout shift
        const currentHeight = content.offsetHeight;
        content.style.minHeight = `${currentHeight}px`;
        
        // Καθαρισμός και επαναφόρτωση
        content.innerHTML = '';
        
        // Η loadContent είναι async, οπότε θα καθαρίσουμε το minHeight όταν τελειώσει
        loadContent().then(() => {
            // Μικρή καθυστέρηση για να προλάβει το rendering
            setTimeout(() => {
                content.style.minHeight = '';
            }, 100);
        });
    }
}

if (closeFontDialog) {
    closeFontDialog.addEventListener('click', () => {
        const scrollY = document.body.style.top;
        fontSizeDialog.close();
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });
}

if (fontSizeSlider) {
    fontSizeSlider.addEventListener('input', (e) => {
        currentFontSize = e.target.value;
        fontSizeValue.textContent = currentFontSize;
        document.documentElement.style.setProperty('--font-size', `${currentFontSize}px`);
        saveSettings();
    });
}

// Κλείσιμο dialog με click έξω από αυτό
if (fontSizeDialog) {
    fontSizeDialog.addEventListener('click', (e) => {
        const rect = fontSizeDialog.getBoundingClientRect();
        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            const scrollY = document.body.style.top;
            fontSizeDialog.close();
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
});
}

// Bottom sheet για μετάφραση
const translationSheet = document.getElementById('translationSheet');
const sheetOverlay = document.getElementById('sheetOverlay');
const translationText = document.getElementById('translationText');

function showTranslation(paragraphNum) {
    const translation = translations[paragraphNum];
    if (translation) {
        translationText.textContent = translation;
        translationSheet.classList.add('active');
        sheetOverlay.classList.add('active');
    }
}

function hideTranslation() {
    translationSheet.classList.remove('active');
    sheetOverlay.classList.remove('active');
}

sheetOverlay.addEventListener('click', hideTranslation);

// Κλείσιμο με swipe down (προαιρετικό)
let startY = 0;
let currentY = 0;

translationSheet.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

translationSheet.addEventListener('touchmove', (e) => {
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    
    if (diff > 0) {
        translationSheet.style.transform = `translateY(${diff}px)`;
    }
});

translationSheet.addEventListener('touchend', () => {
    const diff = currentY - startY;
    
    if (diff > 100) {
        hideTranslation();
    }
    
    translationSheet.style.transform = '';
    startY = 0;
    currentY = 0;
});

// Mobile Menu functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const closeMenu = document.getElementById('closeMenu');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', openMobileMenu);
}

if (closeMenu) {
    closeMenu.addEventListener('click', closeMobileMenu);
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Settings button
const settingsBtn = document.getElementById('settingsBtn');
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        closeMobileMenu();
        if (fontSizeDialog) {
            fontSizeDialog.showModal();
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${window.scrollY}px`;
        }
    });
}

// Menu bookmarks
document.querySelectorAll('.bookmark-item-menu').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            closeMobileMenu();
            
            const headerHeight = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                targetElement.classList.add('highlight');
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 2000);
            }, 500);
        }
    });
});

// Theme option buttons
const themeOptions = document.querySelectorAll('.theme-option');
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentTheme = option.dataset.theme;
        document.body.dataset.theme = currentTheme;
        if (themeIcon) {
            themeIcon.textContent = themeIcons[currentTheme];
        }
        saveSettings();
        updateThemeButtons();
    });
});

function updateThemeButtons() {
    themeOptions.forEach(option => {
        if (option.dataset.theme === currentTheme) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Font option buttons
const fontOptions = document.querySelectorAll('.font-option');
fontOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentFont = option.dataset.font;
        document.documentElement.style.setProperty('--font-family', fontFamilies[currentFont]);
        saveSettings();
        updateFontButtons();
    });
});

function updateFontButtons() {
    fontOptions.forEach(option => {
        if (option.dataset.font === currentFont) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Initialize button states
if (themeOptions.length > 0) {
    updateThemeButtons();
}
if (fontOptions.length > 0) {
    updateFontButtons();
}

// Reading Progress Bar
const progressFill = document.getElementById('progressFill');

function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const progress = (scrollTop / documentHeight) * 100;
    
    if (progressFill) {
        progressFill.style.width = `${Math.min(progress, 100)}%`;
    }
}

// Save scroll position
function saveScrollPosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    localStorage.setItem('scrollPosition', scrollTop);
}

// Restore scroll position
function restoreScrollPosition() {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo({
            top: parseInt(savedPosition),
            behavior: 'instant'
        });
    }
}

// Update progress on scroll and save position
window.addEventListener('scroll', () => {
    updateProgressBar();
    // Debounce save to avoid too many writes
    clearTimeout(window.scrollSaveTimeout);
    window.scrollSaveTimeout = setTimeout(saveScrollPosition, 500);
});

window.addEventListener('resize', updateProgressBar);

// Restore scroll position after content loads
window.addEventListener('load', () => {
    setTimeout(() => {
        restoreScrollPosition();
        updateProgressBar();
    }, 100);
});

// Scroll to Top FAB
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function toggleScrollToTopButton() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Update FAB visibility on scroll
window.addEventListener('scroll', toggleScrollToTopButton);

// Initial check
setTimeout(toggleScrollToTopButton, 100);

// Theotokos Overlay with Carousel
const theotokosOverlay = document.getElementById('theotokosOverlay');
const closeTheotokos = document.getElementById('closeTheotokos');
const carouselTrack = document.getElementById('carouselTrack');
const carouselIndicators = document.getElementById('carouselIndicators');
const prevCardBtn = document.getElementById('prevCard');
const nextCardBtn = document.getElementById('nextCard');

let currentCardIndex = 0;
let chairetismoiCards = [];
let chairetismoiTranslations = [];
const totalCards = 25;

// Load Chairetismoi from markdown
async function loadChairetismoi() {
    try {
        const response = await fetch('chairetismoi.md');
        if (!response.ok) {
            throw new Error('Failed to load chairetismoi.md');
        }
        const text = await response.text();
        parseChairetismoi(text);
    } catch (error) {
        console.error('Error loading chairetismoi:', error);
        // Fallback to placeholder
        chairetismoiCards = Array(25).fill('Το περιεχόμενο θα προστεθεί...');
    }
}

function parseChairetismoi(markdownText) {
    const lines = markdownText.split('\n');
    let currentCard = '';
    let currentTranslation = '';
    let isTranslation = false;
    
    lines.forEach(line => {
        if (line.startsWith('## Κάρτα')) {
            // Save previous card if exists
            if (currentCard.trim()) {
                chairetismoiCards.push(currentCard.trim());
                chairetismoiTranslations.push(currentTranslation.trim());
            }
            currentCard = '';
            currentTranslation = '';
            isTranslation = false;
        } else if (line.startsWith('### Μετάφραση')) {
            isTranslation = true;
        } else if (line.trim() && !line.startsWith('#')) {
            // Add content line
            if (isTranslation) {
                currentTranslation += line + ' ';
            } else {
                currentCard += line + ' ';
            }
        }
    });
    
    // Add last card
    if (currentCard.trim()) {
        chairetismoiCards.push(currentCard.trim());
        chairetismoiTranslations.push(currentTranslation.trim());
    }
    
    console.log('Loaded chairetismoi cards:', chairetismoiCards.length);
    console.log('Loaded chairetismoi translations:', chairetismoiTranslations.length);
}

function initializeCarousel() {
    if (!carouselTrack || !carouselIndicators) return;
    
    // Create cards
    carouselTrack.innerHTML = '';
    chairetismoiCards.forEach((text, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        
        const content = document.createElement('div');
        content.className = 'carousel-card-content';
        
        // Original text
        const p = document.createElement('p');
        p.textContent = text;
        content.appendChild(p);
        
        // Translation (if enabled and exists)
        if (translationEnabled && chairetismoiTranslations[index]) {
            const translationP = document.createElement('p');
            translationP.className = 'carousel-translation';
            translationP.textContent = chairetismoiTranslations[index];
            content.appendChild(translationP);
        }
        
        // Add close button on last card
        if (index === chairetismoiCards.length - 1) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'carousel-close-btn';
            closeBtn.textContent = 'Κλείσιμο';
            closeBtn.addEventListener('click', closeTheotokosOverlay);
            content.appendChild(closeBtn);
        }
        
        card.appendChild(content);
        carouselTrack.appendChild(card);
    });
    
    // Create indicators
    carouselIndicators.innerHTML = '';
    for (let i = 0; i < totalCards; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToCard(i));
        carouselIndicators.appendChild(indicator);
    }
    
    updateCarousel();
}

function goToCard(index) {
    currentCardIndex = Math.max(0, Math.min(index, totalCards - 1));
    updateCarousel();
}

function updateCarousel() {
    if (!carouselTrack) return;
    
    // Update track position
    const offset = -currentCardIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    const indicators = carouselIndicators.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCardIndex);
    });
    
    // Update buttons
    if (prevCardBtn) prevCardBtn.disabled = currentCardIndex === 0;
    if (nextCardBtn) nextCardBtn.disabled = currentCardIndex === totalCards - 1;
}

async function openTheotokosOverlay() {
    theotokosOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentCardIndex = 0;
    
    // Load chairetismoi if not already loaded
    if (chairetismoiCards.length === 0) {
        await loadChairetismoi();
    }
    
    initializeCarousel();
}

function closeTheotokosOverlay() {
    theotokosOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (closeTheotokos) {
    closeTheotokos.addEventListener('click', closeTheotokosOverlay);
}

if (theotokosOverlay) {
    theotokosOverlay.addEventListener('click', (e) => {
        if (e.target === theotokosOverlay) {
            closeTheotokosOverlay();
        }
    });
}

if (prevCardBtn) {
    prevCardBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            goToCard(currentCardIndex - 1);
        }
    });
}

if (nextCardBtn) {
    nextCardBtn.addEventListener('click', () => {
        if (currentCardIndex < totalCards - 1) {
            goToCard(currentCardIndex + 1);
        }
    });
}

// Touch/swipe support
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

if (carouselTrack) {
    carouselTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });
    
    carouselTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Only handle horizontal swipes (ignore if vertical scroll)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0 && currentCardIndex < totalCards - 1) {
            // Swipe left - next card
            goToCard(currentCardIndex + 1);
        } else if (diffX < 0 && currentCardIndex > 0) {
            // Swipe right - previous card
            goToCard(currentCardIndex - 1);
        }
    }
}

// Handle content buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('content-button')) {
        const action = e.target.dataset.action;
        if (action === 'open-theotokos') {
            openTheotokosOverlay();
        }
    }
});

// Φόρτωση περιεχομένου
loadContent();
