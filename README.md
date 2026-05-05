"# Μικρό Απόδειπνο 🙏

Μια σύγχρονη web εφαρμογή για το Μικρό Απόδειπνο.

## ✨ Χαρακτηριστικά

### 📖 Κύριες Λειτουργίες
- **Πλήρες κείμενο** του Μικρού Απόδειπνου στο πρωτότυπο κείμενο
- **Απόδοση** σε νέα ελληνικά με δύο τρόπους εμφάνισης:
  - 🔘 **Αναδυόμενο**: Bottom sheet με κλικ στην παράγραφο
  - 📖 **Παράθεση**: Δύο στήλες (πρωτότυπο και μετάφραση)
- **Χαιρετισμοί της Υπεραγίας Θεοτόκου**: κάρτες με μετάφραση
- **13 Σελιδοδείκτες** για γρήγορη πλοήγηση σε συγκεκριμένες ενότητες

### 🎨 Εμφάνιση & Προσαρμογή
- **2 Θέματα**: Light & Dark mode με smooth transitions
- **4 Γραμματοσειρές**: Georgia, Palatino, Times New Roman, Arial
- **Ρυθμιζόμενο μέγεθος γραμματοσειράς**: 14px - 24px
- **Βυζαντινά Drop Caps**: Διακοσμητικά πρώτα γράμματα με βυζαντινή γραμματοσειρά
- **Responsive Design**: Βελτιστοποιημένο για mobile, tablet και desktop

### 🚀 UX Features
- **Reading Progress Bar**: Οπτική ένδειξη προόδου ανάγνωσης
- **Scroll to Top FAB**: Floating action button για γρήγορη επιστροφή στην κορυφή
- **Scroll Position Memory**: Θυμάται τη θέση σου μεταξύ sessions
- **Sticky Header**: Πάντα προσβάσιμο navigation
- **Swipe Gestures**: Touch-friendly navigation στους Χαιρετισμούς

## 🛠️ Τεχνολογίες

- **Vanilla JavaScript** - Χωρίς dependencies
- **CSS3** - Modern styling με CSS variables
- **Markdown** - Εύκολη επεξεργασία περιεχομένου
- **LocalStorage** - Αποθήκευση ρυθμίσεων και scroll position
- **SVG** - Scalable favicon

## 📁 Δομή Αρχείων

```
mikroApodeipno/
├── index.html              # Κύρια σελίδα
├── styles.css              # Όλα τα styles
├── script.js               # Όλη η λογική
├── mikro-apodeipno.md      # Κείμενο Μικρού Απόδειπνου
├── chairetismoi.md         # Χαιρετισμοί (25 κάρτες)
├── byz.ttf                 # Βυζαντινή γραμματοσειρά για drop caps
├── favicon.svg             # Orthodox cross icon
└── README.md               # Αυτό το αρχείο
```

## 🚀 Εγκατάσταση & Χρήση

### Τοπική Εκτέλεση

1. **Clone το repository:**
```bash
git clone https://github.com/yourusername/mikro-apodeipno.git
cd mikro-apodeipno
```

2. **Εκκίνηση local server:**
```bash
# Python 3
python3 -m http.server 8001

# ή Python 2
python -m SimpleHTTPServer 8001

# ή με Node.js
npx http-server -p 8001
```

3. **Άνοιξε στον browser:**
```
http://localhost:8001
```

### GitHub Pages

Η εφαρμογή θα είναι διαθέσιμη στο: `https://dmcode9.github.io/MikroApodeipno/`

## 📄 License

Αυτό το project είναι ανοιχτού κώδικα και διατίθεται υπό την [MIT License](LICENSE).