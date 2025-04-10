import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    question: "Was ist der Hauptvorteil der Verwendung von Cloud Computing-Diensten?",
    options: [
      { text: "Vorhersehbare Kosten", isCorrect: false },
      { text: "Bezahlung nur für genutzte Ressourcen", isCorrect: true },
      { text: "Langsame Bereitstellung von Ressourcen", isCorrect: false },
      { text: "Lokale Datenspeicherung", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Welches Azure-Servicemodell erfordert am wenigsten Verwaltungsaufwand?",
    options: [
      { text: "Infrastructure as a Service (IaaS)", isCorrect: false },
      { text: "Platform as a Service (PaaS)", isCorrect: false },
      { text: "Software as a Service (SaaS)", isCorrect: true },
      { text: "Container as a Service (CaaS)", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "Was ist eine Charakteristik von Azure Blob Storage?",
    options: [
      { text: "Relationale Datenbank", isCorrect: false },
      { text: "Unstrukturierte Datenspeicherung", isCorrect: true },
      { text: "Real-time Messaging", isCorrect: false },
      { text: "In-Memory Caching", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Welcher Azure-Dienst bietet verwaltete SQL-Datenbanken?",
    options: [
      { text: "Azure SQL Database", isCorrect: true },
      { text: "Azure Table Storage", isCorrect: false },
      { text: "Azure Files", isCorrect: false },
      { text: "Azure Queue Storage", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Was ist eine Funktion von Azure Active Directory?",
    options: [
      { text: "Datensicherung", isCorrect: false },
      { text: "Identitätsmanagement", isCorrect: true },
      { text: "Containerisierung", isCorrect: false },
      { text: "Datenbankverwaltung", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "Welche Azure-Region sollten Sie für die niedrigste Latenz wählen?",
    options: [
      { text: "Die günstigste Region", isCorrect: false },
      { text: "Die Region mit der höchsten Kapazität", isCorrect: false },
      { text: "Die Region, die Ihrem Standort am nächsten ist", isCorrect: true },
      { text: "Eine beliebige Region", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Was ist ein Vorteil von Azure Availability Zones?",
    options: [
      { text: "Kostenlose Dienste", isCorrect: false },
      { text: "Automatische Skalierung", isCorrect: false },
      { text: "Schutz vor Rechenzentrumsausfällen", isCorrect: true },
      { text: "Globale Replikation", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Welcher Dienst ermöglicht serverloses Computing in Azure?",
    options: [
      { text: "Azure Virtual Machines", isCorrect: false },
      { text: "Azure Functions", isCorrect: true },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Storage", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "Was ist eine Funktion von Azure Policy?",
    options: [
      { text: "Ressourcenverwaltung", isCorrect: false },
      { text: "Kostenmanagement", isCorrect: false },
      { text: "Durchsetzung von Compliance-Regeln", isCorrect: true },
      { text: "Netzwerksicherheit", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "Welcher Dienst wird für Container-Orchestrierung verwendet?",
    options: [
      { text: "Azure Kubernetes Service (AKS)", isCorrect: true },
      { text: "Azure DevOps", isCorrect: false },
      { text: "Azure Monitor", isCorrect: false },
      { text: "Azure Cache", isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "Was ist ein Merkmal von Azure ExpressRoute?",
    options: [
      { text: "Öffentliche Internetverbindung", isCorrect: false },
      { text: "Private Verbindung zu Azure", isCorrect: true },
      { text: "Kostenlose Nutzung", isCorrect: false },
      { text: "VPN-Verbindung", isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "Welcher Dienst bietet DDoS-Schutz in Azure?",
    options: [
      { text: "Azure DDoS Protection", isCorrect: true },
      { text: "Azure Firewall", isCorrect: false },
      { text: "Network Security Groups", isCorrect: false },
      { text: "Azure VPN Gateway", isCorrect: false }
    ]
  },
  {
    id: 13,
    question: "Was ist ein Vorteil von Azure Reservations?",
    options: [
      { text: "Höhere Flexibilität", isCorrect: false },
      { text: "Kosteneinsparungen bei langfristiger Nutzung", isCorrect: true },
      { text: "Bessere Performance", isCorrect: false },
      { text: "Mehr Sicherheit", isCorrect: false }
    ]
  },
  {
    id: 14,
    question: "Welcher Service wird für Containerregistrierung verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "Was bietet Azure Security Center?",
    options: [
      { text: "Datenbankmanagement", isCorrect: false },
      { text: "Einheitliche Sicherheitsverwaltung", isCorrect: true },
      { text: "Netzwerkvirtualisierung", isCorrect: false },
      { text: "Anwendungsentwicklung", isCorrect: false }
    ]
  },
  {
    id: 16,
    question: "Welche Azure-Dienste fallen unter die Kategorie 'Compute'?",
    options: [
      { text: "Virtual Machines, App Services, und Azure Functions", isCorrect: true },
      { text: "SQL Database, Cosmos DB, und Storage Accounts", isCorrect: false },
      { text: "Virtual Network, Load Balancer, und Application Gateway", isCorrect: false },
      { text: "Monitor, Security Center, und Sentinel", isCorrect: false }
    ]
  },
  {
    id: 17,
    question: "Was ist ein Vorteil der Verwendung von Azure DevTest Labs?",
    options: [
      { text: "Automatische Skalierung von Produktionsumgebungen", isCorrect: false },
      { text: "Kostenkontrolle für Entwicklungs- und Testumgebungen", isCorrect: true },
      { text: "Permanente Verfügbarkeit von Ressourcen", isCorrect: false },
      { text: "Unbegrenzte Ressourcennutzung", isCorrect: false }
    ]
  },
  {
    id: 18,
    question: "Welche Aussage beschreibt am besten das Azure-Supportmodell?",
    options: [
      { text: "Support ist nur während der Geschäftszeiten verfügbar", isCorrect: false },
      { text: "Support ist abhängig vom gewählten Supportplan", isCorrect: true },
      { text: "Support ist immer kostenlos", isCorrect: false },
      { text: "Support ist nur in englischer Sprache verfügbar", isCorrect: false }
    ]
  },
  {
    id: 19,
    question: "Was ist der Hauptzweck von Azure Network Security Groups (NSGs)?",
    options: [
      { text: "Verschlüsselung von Daten", isCorrect: false },
      { text: "Filterung von Netzwerkverkehr", isCorrect: true },
      { text: "Speicherung von Zugangsdaten", isCorrect: false },
      { text: "Verwaltung von Benutzerkonten", isCorrect: false }
    ]
  },
  {
    id: 20,
    question: "Welche Art von Skalierung ermöglicht das automatische Hinzufügen von Ressourcen basierend auf der Nachfrage?",
    options: [
      { text: "Vertikale Skalierung", isCorrect: false },
      { text: "Horizontale Skalierung", isCorrect: true },
      { text: "Diagonale Skalierung", isCorrect: false },
      { text: "Manuelle Skalierung", isCorrect: false }
    ]
  },
  {
    id: 21,
    question: "Was ist ein Merkmal von Azure Resource Groups?",
    options: [
      { text: "Ressourcen können nur zu einer Resource Group gehören", isCorrect: true },
      { text: "Ressourcen können in mehreren Resource Groups sein", isCorrect: false },
      { text: "Resource Groups sind optional", isCorrect: false },
      { text: "Resource Groups können nicht gelöscht werden", isCorrect: false }
    ]
  },
  {
    id: 22,
    question: "Welcher Dienst wird für die Überwachung und Verwaltung von Containeranwendungen verwendet?",
    options: [
      { text: "Azure Monitor", isCorrect: true },
      { text: "Azure Backup", isCorrect: false },
      { text: "Azure Site Recovery", isCorrect: false },
      { text: "Azure DevOps", isCorrect: false }
    ]
  },
  {
    id: 23,
    question: "Was ist eine Funktion von Azure Key Vault?",
    options: [
      { text: "Speicherung von Schlüsseln und Geheimnissen", isCorrect: true },
      { text: "Verwaltung von virtuellen Netzwerken", isCorrect: false },
      { text: "Bereitstellung von Datenbanken", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 24,
    question: "Welche Azure-Dienste bieten Datenbankfunktionalität?",
    options: [
      { text: "Azure SQL Database und Cosmos DB", isCorrect: true },
      { text: "Azure Functions und Logic Apps", isCorrect: false },
      { text: "Azure DevOps und GitHub", isCorrect: false },
      { text: "Azure Monitor und Application Insights", isCorrect: false }
    ]
  },
  {
    id: 25,
    question: "Was ist ein Vorteil von Azure Availability Sets?",
    options: [
      { text: "Schutz vor Hardware- und Softwareupdates", isCorrect: true },
      { text: "Kostenlose Backups", isCorrect: false },
      { text: "Unbegrenzte Bandbreite", isCorrect: false },
      { text: "Automatische Datenverschlüsselung", isCorrect: false }
    ]
  },
  {
    id: 26,
    question: "Welcher Azure-Dienst wird für die Analyse von Big Data verwendet?",
    options: [
      { text: "Azure Synapse Analytics", isCorrect: true },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure CDN", isCorrect: false },
      { text: "Azure DNS", isCorrect: false }
    ]
  },
  {
    id: 27,
    question: "Was ist ein Merkmal von Azure Load Balancer?",
    options: [
      { text: "Verteilung von Netzwerkverkehr", isCorrect: true },
      { text: "Datenverschlüsselung", isCorrect: false },
      { text: "Benutzerverwaltung", isCorrect: false },
      { text: "Datenbankoptimierung", isCorrect: false }
    ]
  },
  {
    id: 28,
    question: "Welche Aussage zur Azure-Datenverschlüsselung ist korrekt?",
    options: [
      { text: "Verschlüsselung ist standardmäßig für alle Dienste aktiviert", isCorrect: true },
      { text: "Verschlüsselung muss manuell konfiguriert werden", isCorrect: false },
      { text: "Verschlüsselung ist optional", isCorrect: false },
      { text: "Verschlüsselung ist nicht verfügbar", isCorrect: false }
    ]
  },
  {
    id: 29,
    question: "Was ist ein Hauptmerkmal von Azure Virtual Networks?",
    options: [
      { text: "Isolierung und Segmentierung", isCorrect: true },
      { text: "Automatische Backups", isCorrect: false },
      { text: "Kostenloses SSL-Zertifikat", isCorrect: false },
      { text: "Unbegrenzte Speicherkapazität", isCorrect: false }
    ]
  },
  {
    id: 30,
    question: "Welcher Azure-Dienst wird für die Automatisierung von Geschäftsprozessen verwendet?",
    options: [
      { text: "Azure Logic Apps", isCorrect: true },
      { text: "Azure Batch", isCorrect: false },
      { text: "Azure Cache", isCorrect: false },
      { text: "Azure Search", isCorrect: false }
    ]
  },
  {
    id: 31,
    question: "Was ist der Hauptzweck von Azure Advisor?",
    options: [
      { text: "Bereitstellung von Empfehlungen zur Optimierung von Azure-Ressourcen", isCorrect: true },
      { text: "Verwaltung von Backups", isCorrect: false },
      { text: "Konfiguration von Netzwerken", isCorrect: false },
      { text: "Entwicklung von Anwendungen", isCorrect: false }
    ]
  },
  {
    id: 32,
    question: "Welche Aussage zu Azure Availability Zones ist korrekt?",
    options: [
      { text: "Sie befinden sich in verschiedenen geografischen Regionen", isCorrect: false },
      { text: "Sie sind physisch getrennte Standorte innerhalb einer Azure-Region", isCorrect: true },
      { text: "Sie sind virtuelle Netzwerke", isCorrect: false },
      { text: "Sie sind Backup-Lösungen", isCorrect: false }
    ]
  },
  {
    id: 33,
    question: "Was ist ein Vorteil von Azure Blueprints?",
    options: [
      { text: "Standardisierte Bereitstellung von Umgebungen", isCorrect: true },
      { text: "Kostenlose Ressourcen", isCorrect: false },
      { text: "Unbegrenzte Speicherkapazität", isCorrect: false },
      { text: "Automatische Datensicherung", isCorrect: false }
    ]
  },
  {
    id: 34,
    question: "Welcher Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Hub", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 35,
    question: "Was ist ein Merkmal von Azure App Service?",
    options: [
      { text: "Vollständig verwaltete Plattform für Webanwendungen", isCorrect: true },
      { text: "Virtuelle Maschinen-Verwaltung", isCorrect: false },
      { text: "Netzwerksicherheit", isCorrect: false },
      { text: "Datenbankadministration", isCorrect: false }
    ]
  },
  {
    id: 36,
    question: "Welche Art von Skalierung beschreibt das Hinzufügen von mehr Ressourcen zu einer einzelnen Instanz?",
    options: [
      { text: "Vertikale Skalierung", isCorrect: true },
      { text: "Horizontale Skalierung", isCorrect: false },
      { text: "Diagonale Skalierung", isCorrect: false },
      { text: "Laterale Skalierung", isCorrect: false }
    ]
  },
  {
    id: 37,
    question: "Was ist ein Hauptmerkmal von Azure Container Instances?",
    options: [
      { text: "Serverlose Ausführung von Containern", isCorrect: true },
      { text: "Verwaltung von virtuellen Maschinen", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Netzwerkkonfiguration", isCorrect: false }
    ]
  },
  {
    id: 38,
    question: "Welcher Azure-Dienst bietet erweiterte Sicherheitsfunktionen für SQL-Datenbanken?",
    options: [
      { text: "Azure SQL Database Advanced Threat Protection", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure CDN", isCorrect: false },
      { text: "Azure DNS", isCorrect: false }
    ]
  },
  {
    id: 39,
    question: "Was ist ein Vorteil von Azure Policy?",
    options: [
      { text: "Durchsetzung von Unternehmensstandards", isCorrect: true },
      { text: "Automatische Backups", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false },
      { text: "Anwendungsentwicklung", isCorrect: false }
    ]
  },
  {
    id: 40,
    question: "Welcher Dienst wird für die Verwaltung von Kubernetes-Clustern verwendet?",
    options: [
      { text: "Azure Kubernetes Service (AKS)", isCorrect: true },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 41,
    question: "Was ist ein Hauptmerkmal von Azure Front Door?",
    options: [
      { text: "Globale Lastverteilung und Anwendungsschutz", isCorrect: true },
      { text: "Datenbankverwaltung", isCorrect: false },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 42,
    question: "Welche Aussage zur Azure-Kostenverwaltung ist korrekt?",
    options: [
      { text: "Kosten können durch Tags und Budgets kontrolliert werden", isCorrect: true },
      { text: "Alle Azure-Dienste sind kostenlos", isCorrect: false },
      { text: "Kosten können nicht überwacht werden", isCorrect: false },
      { text: "Budgets sind nicht verfügbar", isCorrect: false }
    ]
  },
  {
    id: 43,
    question: "Was ist ein Vorteil von Azure Site Recovery?",
    options: [
      { text: "Automatisierte Disaster Recovery", isCorrect: true },
      { text: "Kostenlose Ressourcen", isCorrect: false },
      { text: "Unbegrenzte Bandbreite", isCorrect: false },
      { text: "Entwicklungstools", isCorrect: false }
    ]
  },
  {
    id: 44,
    question: "Welcher Azure-Dienst wird für die Verwaltung von API-Schnittstellen verwendet?",
    options: [
      { text: "Azure API Management", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 45,
    question: "Was ist ein Merkmal von Azure Service Bus?",
    options: [
      { text: "Enterprise Messaging und Nachrichtenwarteschlangen", isCorrect: true },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false }
    ]
  },
  {
    id: 46,
    question: "Was ist ein Hauptvorteil von Azure Identity & Access Management?",
    options: [
      { text: "Zentrale Verwaltung von Benutzeridentitäten und Zugriffsrechten", isCorrect: true },
      { text: "Kostenlose Datenspeicherung", isCorrect: false },
      { text: "Verbesserte Rechenleistung", isCorrect: false },
      { text: "Automatische Datenbankoptimierung", isCorrect: false }
    ]
  },
  {
    id: 47,
    question: "Welcher Azure-Dienst wird für Big Data-Analysen verwendet?",
    options: [
      { text: "Azure HDInsight", isCorrect: true },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure DNS", isCorrect: false },
      { text: "Azure Key Vault", isCorrect: false }
    ]
  },
  {
    id: 48,
    question: "Was ist ein Merkmal von Azure Availability Zones?",
    options: [
      { text: "Physisch getrennte Rechenzentren innerhalb einer Region", isCorrect: true },
      { text: "Kostenlose Ressourcen", isCorrect: false },
      { text: "Automatische Codegenerierung", isCorrect: false },
      { text: "Datenverschlüsselung", isCorrect: false }
    ]
  },
  {
    id: 49,
    question: "Welcher Dienst bietet Compliance-Management in Azure?",
    options: [
      { text: "Azure Policy", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure Virtual Network", isCorrect: false }
    ]
  },
  {
    id: 50,
    question: "Was ist ein Hauptmerkmal der General Data Protection Regulation (GDPR) in Azure?",
    options: [
      { text: "Schutz personenbezogener Daten von EU-Bürgern", isCorrect: true },
      { text: "Kostenlose Ressourcen für EU-Unternehmen", isCorrect: false },
      { text: "Automatische Skalierung von Diensten", isCorrect: false },
      { text: "Schnellere Netzwerkverbindungen in Europa", isCorrect: false }
    ]
  }

  ,
  {
    id: 51,
    question: "Was ist Azure Kubernetes Service (AKS)?",
    options: [
      { text: "Ein verwalteter Kubernetes-Dienst zur Container-Orchestrierung", isCorrect: true },
      { text: "Ein Dienst zur Datenbankoptimierung", isCorrect: false },
      { text: "Ein Sicherheitsdienst für Netzwerke", isCorrect: false },
      { text: "Ein Tool zur Anwendungsentwicklung", isCorrect: false }
    ]
  },
  {
    id: 52,
    question: "Welche Aussage zu Azure Cosmos DB ist korrekt?",
    options: [
      { text: "Eine global verteilte Multi-Modell-Datenbank", isCorrect: true },
      { text: "Ein Dienst zur Netzwerkverwaltung", isCorrect: false },
      { text: "Ein Tool zur Serverless-Programmierung", isCorrect: false },
      { text: "Ein Dienst zur Überwachung von Ressourcen", isCorrect: false }
    ]
  },
  {
    id: 53,
    question: "Was ist der Hauptzweck von Azure Monitor?",
    options: [
      { text: "Überwachung und Analyse von Azure-Ressourcen", isCorrect: true },
      { text: "Entwicklung von Webanwendungen", isCorrect: false },
      { text: "Verwaltung von Benutzerkonten", isCorrect: false },
      { text: "Bereitstellung von virtuellen Maschinen", isCorrect: false }
    ]
  },
  {
    id: 54,
    question: "Welcher Azure-Dienst wird für serverlose Anwendungen verwendet?",
    options: [
      { text: "Azure Functions", isCorrect: true },
      { text: "Azure Virtual Machines", isCorrect: false },
      { text: "Azure SQL Database", isCorrect: false },
      { text: "Azure Storage", isCorrect: false }
    ]
  },
  {
    id: 55,
    question: "Was ist ein Vorteil von Azure Traffic Manager?",
    options: [
      { text: "Globale Verteilung von Datenverkehr für hohe Verfügbarkeit", isCorrect: true },
      { text: "Verschlüsselung von Daten", isCorrect: false },
      { text: "Kostenlose Ressourcen", isCorrect: false },
      { text: "Automatische Codegenerierung", isCorrect: false }
    ]
  },
  {
    id: 56,
    question: "Welche Azure-Ressource wird für die Speicherung unstrukturierter Daten verwendet?",
    options: [
      { text: "Azure Blob Storage", isCorrect: true },
      { text: "Azure SQL Database", isCorrect: false },
      { text: "Azure Virtual Machines", isCorrect: false },
      { text: "Azure Active Directory", isCorrect: false }
    ]
  },
  {
    id: 57,
    question: "Was ist Azure Active Directory?",
    options: [
      { text: "Ein Identitäts- und Zugriffsverwaltungsdienst", isCorrect: true },
      { text: "Ein Dienst zur Datenspeicherung", isCorrect: false },
      { text: "Ein Tool zur Netzwerkkonfiguration", isCorrect: false },
      { text: "Ein Dienst zur Bereitstellung virtueller Maschinen", isCorrect: false }
    ]
  },
  {
    id: 58,
    question: "Welcher Azure-Dienst bietet Schutz vor DDoS-Angriffen?",
    options: [
      { text: "Azure DDoS Protection", isCorrect: true },
      { text: "Azure Firewall", isCorrect: false },
      { text: "Azure Monitor", isCorrect: false },
      { text: "Azure DevOps", isCorrect: false }
    ]
  },
  {
    id: 59,
    question: "Was ist ein Vorteil von Azure Availability Zones?",
    options: [
      { text: "Schutz vor Ausfällen ganzer Rechenzentren", isCorrect: true },
      { text: "Kostenlose Ressourcen", isCorrect: false },
      { text: "Automatische Codebereitstellung", isCorrect: false },
      { text: "Unbegrenzte Datenspeicherung", isCorrect: false }
    ]
  },
  {
    id: 60,
    question: "Welcher Azure-Dienst wird für die Containerisierung von Anwendungen verwendet?",
    options: [
      { text: "Azure Container Instances", isCorrect: true },
      { text: "Azure SQL Database", isCorrect: false },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure Active Directory", isCorrect: false }
    ]
  },
  {
    id: 61,
    question: "Was ist ein Hauptmerkmal von Azure ExpressRoute?",
    options: [
      { text: "Private Verbindung zu Azure-Rechenzentren", isCorrect: true },
      { text: "Öffentliche Internetverbindung", isCorrect: false },
      { text: "Kostenlose Datenübertragung", isCorrect: false },
      { text: "Automatische Verschlüsselung", isCorrect: false }
    ]
  },
  {
    id: 62,
    question: "Welche Azure-Dienste fallen unter Infrastructure as a Service (IaaS)?",
    options: [
      { text: "Virtuelle Maschinen und Speicher", isCorrect: true },
      { text: "App Services und Funktionen", isCorrect: false },
      { text: "Office 365 und Dynamics 365", isCorrect: false },
      { text: "Azure DevOps und Azure AD", isCorrect: false }
    ]
  },
  {
    id: 63,
    question: "Was ist ein Vorteil von Azure Managed Disks?",
    options: [
      { text: "Automatische Skalierung und Verwaltung von Speicher", isCorrect: true },
      { text: "Kostenlose Nutzung", isCorrect: false },
      { text: "Unbegrenzte Kapazität", isCorrect: false },
      { text: "Manuelle Konfiguration", isCorrect: false }
    ]
  },
  {
    id: 64,
    question: "Welcher Azure-Dienst bietet erweiterte Bedrohungsanalyse?",
    options: [
      { text: "Azure Sentinel", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure CDN", isCorrect: false },
      { text: "Azure DNS", isCorrect: false }
    ]
  },
  {
    id: 65,
    question: "Was ist ein Hauptmerkmal von Azure Logic Apps?",
    options: [
      { text: "Workflow-Automatisierung ohne Code", isCorrect: true },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Netzwerkkonfiguration", isCorrect: false }
    ]
  },
  {
    id: 66,
    question: "Welche Funktion bietet Azure File Sync?",
    options: [
      { text: "Synchronisation von Dateien zwischen Windows-Servern und Azure", isCorrect: true },
      { text: "E-Mail-Synchronisation", isCorrect: false },
      { text: "Datenbanksynchronisation", isCorrect: false },
      { text: "Netzwerksynchronisation", isCorrect: false }
    ]
  },
  {
    id: 67,
    question: "Was ist ein Vorteil von Azure Dedicated Host?",
    options: [
      { text: "Physische Server exklusiv für einen Kunden", isCorrect: true },
      { text: "Geteilte Ressourcen", isCorrect: false },
      { text: "Kostenlose Nutzung", isCorrect: false },
      { text: "Automatische Skalierung", isCorrect: false }
    ]
  },
  {
    id: 68,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerregistrierungen verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Kubernetes Service", isCorrect: false },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false }
    ]
  },
  {
    id: 69,
    question: "Was ist ein Hauptmerkmal von Azure Stack?",
    options: [
      { text: "Bereitstellung von Azure-Diensten in lokalen Rechenzentren", isCorrect: true },
      { text: "Cloud-only Lösung", isCorrect: false },
      { text: "Kostenlose Dienste", isCorrect: false },
      { text: "Öffentliche Cloud", isCorrect: false }
    ]
  },
  {
    id: 70,
    question: "Welche Funktion bietet Azure Time Series Insights?",
    options: [
      { text: "Analyse von zeitbasierten Daten", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false }
    ]
  },
  {
    id: 71,
    question: "Was ist ein Vorteil von Azure Databricks?",
    options: [
      { text: "Apache Spark-basierte Analytics-Plattform", isCorrect: true },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Netzwerksicherheit", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 72,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Edge-Geräten verwendet?",
    options: [
      { text: "Azure IoT Edge", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 73,
    question: "Was ist ein Hauptmerkmal von Azure Event Grid?",
    options: [
      { text: "Ereignisbasierte Architektur und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 74,
    question: "Welche Funktion bietet Azure Data Factory?",
    options: [
      { text: "Datenintegration und ETL-Dienste", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Netzwerkkonfiguration", isCorrect: false }
    ]
  },
  {
    id: 75,
    question: "Was ist ein Vorteil von Azure Cosmos DB?",
    options: [
      { text: "Global verteilte Multi-Model-Datenbank", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "Eingeschränkte Skalierbarkeit", isCorrect: false },
      { text: "Nur relationale Daten", isCorrect: false }
    ]
  },
  {
    id: 76,
    question: "Welcher Azure-Dienst wird für die Verwaltung von API-Dokumentationen verwendet?",
    options: [
      { text: "Azure API Management", isCorrect: true },
      { text: "Azure DevOps", isCorrect: false },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure Logic Apps", isCorrect: false }
    ]
  },
  {
    id: 77,
    question: "Was ist ein Hauptmerkmal von Azure Service Fabric?",
    options: [
      { text: "Verteilte Systeme und Microservices-Plattform", isCorrect: true },
      { text: "Einzelne Anwendungen", isCorrect: false },
      { text: "Statische Websites", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false }
    ]
  },
  {
    id: 78,
    question: "Welche Funktion bietet Azure Data Lake Storage?",
    options: [
      { text: "Hochleistungsspeicher für Big Data-Analysen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 79,
    question: "Was ist ein Vorteil von Azure Batch?",
    options: [
      { text: "Parallele und HPC-Workloads", isCorrect: true },
      { text: "Einzelne Anwendungen", isCorrect: false },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false }
    ]
  },
  {
    id: 80,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridverbindungen verwendet?",
    options: [
      { text: "Azure Arc", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 81,
    question: "Was ist ein Hauptmerkmal von Azure Analysis Services?",
    options: [
      { text: "Enterprise-Level Analytics-Engine", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 82,
    question: "Welche Funktion bietet Azure Cache for Redis?",
    options: [
      { text: "In-Memory Datencaching", isCorrect: true },
      { text: "Permanente Datenspeicherung", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false },
      { text: "Netzwerksicherheit", isCorrect: false }
    ]
  },
  {
    id: 83,
    question: "Was ist ein Vorteil von Azure Automation?",
    options: [
      { text: "Prozessautomatisierung und Konfigurationsverwaltung", isCorrect: true },
      { text: "Manuelle Prozesse", isCorrect: false },
      { text: "Lokale Ausführung", isCorrect: false },
      { text: "Einzelne Tasks", isCorrect: false }
    ]
  },
  {
    id: 84,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Verschlüsselungsschlüsseln verwendet?",
    options: [
      { text: "Azure Key Vault", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 85,
    question: "Was ist ein Hauptmerkmal von Azure SignalR Service?",
    options: [
      { text: "Echtzeit-Webanwendungskommunikation", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 86,
    question: "Welche Funktion bietet Azure Media Services?",
    options: [
      { text: "Video- und Streaming-Dienste", isCorrect: true },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 87,
    question: "Was ist ein Vorteil von Azure Service Health?",
    options: [
      { text: "Personalisierte Statusüberwachung für Azure-Dienste", isCorrect: true },
      { text: "Allgemeine Statusberichte", isCorrect: false },
      { text: "Lokale Überwachung", isCorrect: false },
      { text: "Manuelle Updates", isCorrect: false }
    ]
  },
  {
    id: 88,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Entwicklertests verwendet?",
    options: [
      { text: "Azure DevTest Labs", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 89,
    question: "Was ist ein Hauptmerkmal von Azure Bastion?",
    options: [
      { text: "Sichere RDP/SSH-Verbindung zu VMs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 90,
    question: "Welche Funktion bietet Azure Private Link?",
    options: [
      { text: "Private Zugriff auf Azure PaaS-Dienste", isCorrect: true },
      { text: "Öffentlicher Zugriff", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 91,
    question: "Was ist ein Hauptmerkmal von Azure Virtual Desktop?",
    options: [
      { text: "Virtualisierte Windows-Desktops in der Cloud", isCorrect: true },
      { text: "Physische Desktop-Computer", isCorrect: false },
      { text: "Lokale Virtualisierung", isCorrect: false },
      { text: "Server-Hosting", isCorrect: false }
    ]
  },
  {
    id: 92,
    question: "Welche Funktion bietet Azure DDoS Protection?",
    options: [
      { text: "Schutz vor DDoS-Angriffen", isCorrect: true },
      { text: "Virenschutz", isCorrect: false },
      { text: "Firewall", isCorrect: false },
      { text: "Datenverschlüsselung", isCorrect: false }
    ]
  },
  {
    id: 93,
    question: "Was ist ein Vorteil von Azure Front Door?",
    options: [
      { text: "Globales Routing und Lastausgleich", isCorrect: true },
      { text: "Lokales Routing", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 94,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Kubernetes-Clustern verwendet?",
    options: [
      { text: "Azure Kubernetes Service (AKS)", isCorrect: true },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 95,
    question: "Was ist ein Hauptmerkmal von Azure Application Gateway?",
    options: [
      { text: "Web-Anwendungs-Lastausgleich und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 96,
    question: "Welche Funktion bietet Azure Firewall?",
    options: [
      { text: "Netzwerksicherheit und Filterung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 97,
    question: "Was ist ein Vorteil von Azure Load Balancer?",
    options: [
      { text: "Verteilung von Netzwerkverkehr", isCorrect: true },
      { text: "Datenverschlüsselung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 98,
    question: "Welcher Azure-Dienst wird für die Verwaltung von SSL/TLS-Zertifikaten verwendet?",
    options: [
      { text: "Azure Key Vault", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 99,
    question: "Was ist ein Hauptmerkmal von Azure Site Recovery?",
    options: [
      { text: "Disaster Recovery und Business Continuity", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 100,
    question: "Welche Funktion bietet Azure Security Center?",
    options: [
      { text: "Sicherheitsüberwachung und -verwaltung", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 101,
    question: "Was ist ein Vorteil von Azure Monitor?",
    options: [
      { text: "Umfassende Überwachung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 102,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerregistrierungen verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Kubernetes Service", isCorrect: false },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 103,
    question: "Was ist ein Hauptmerkmal von Azure DevOps?",
    options: [
      { text: "Entwicklungs- und Bereitstellungsautomatisierung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 104,
    question: "Welche Funktion bietet Azure Active Directory?",
    options: [
      { text: "Identitäts- und Zugriffsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 105,
    question: "Was ist ein Vorteil von Azure Policy?",
    options: [
      { text: "Durchsetzung von Compliance-Regeln", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 106,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Hub", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 107,
    question: "Was ist ein Hauptmerkmal von Azure Cognitive Services?",
    options: [
      { text: "KI und maschinelles Lernen als Service", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 108,
    question: "Welche Funktion bietet Azure Machine Learning?",
    options: [
      { text: "Entwicklung und Bereitstellung von ML-Modellen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 109,
    question: "Was ist ein Vorteil von Azure Databricks?",
    options: [
      { text: "Big Data-Analyse und KI-Plattform", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 110,
    question: "Welcher Azure-Dienst wird für die Verwaltung von APIs verwendet?",
    options: [
      { text: "Azure API Management", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 111,
    question: "Was ist ein Hauptmerkmal von Azure Event Hubs?",
    options: [
      { text: "Verarbeitung großer Mengen von Ereignisdaten", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Verwaltung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 112,
    question: "Welche Funktion bietet Azure Service Bus?",
    options: [
      { text: "Enterprise-Messaging und Nachrichtenwarteschlangen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 113,
    question: "Was ist ein Vorteil von Azure Storage Queue?",
    options: [
      { text: "Asynchrone Nachrichtenverarbeitung", isCorrect: true },
      { text: "Synchrone Kommunikation", isCorrect: false },
      { text: "Datenbankreplikation", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 114,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridnetzwerken verwendet?",
    options: [
      { text: "Azure Virtual WAN", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 115,
    question: "Was ist ein Hauptmerkmal von Azure Private Link?",
    options: [
      { text: "Privater Zugriff auf Azure PaaS-Dienste", isCorrect: true },
      { text: "Öffentlicher Zugriff", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 116,
    question: "Welche Funktion bietet Azure Network Watcher?",
    options: [
      { text: "Netzwerküberwachung und -diagnose", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },                                                                                               
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 117,
    question: "Was ist ein Vorteil von Azure Traffic Manager?",
    options: [
      { text: "Globale DNS-basierte Verkehrsverteilung", isCorrect: true },
      { text: "Lokale Verkehrsverteilung", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 118,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Verschlüsselungsschlüsseln verwendet?",
    options: [
      { text: "Azure Key Vault", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 119,
    question: "Was ist ein Hauptmerkmal von Azure Information Protection?",
    options: [
      { text: "Dokumenten- und E-Mail-Klassifizierung und -Schutz", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 120,
    question: "Welche Funktion bietet Azure AD Privileged Identity Management?",
    options: [
      { text: "Verwaltung, Kontrolle und Überwachung von Zugriffen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 121,
    question: "Was ist ein Vorteil von Azure Security Center?",
    options: [
      { text: "Einheitliche Sicherheitsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 122,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Compliance verwendet?",
    options: [
      { text: "Azure Policy", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 123,
    question: "Was ist ein Hauptmerkmal von Azure Sentinel?",
    options: [
      { text: "SIEM und SOAR-Funktionen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 124,
    question: "Welche Funktion bietet Azure DDoS Protection Standard?",
    options: [
      { text: "Erweiterte DDoS-Mitigation", isCorrect: true },
      { text: "Basis-Firewall", isCorrect: false },
      { text: "Datenverschlüsselung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 125,
    question: "Was ist ein Vorteil von Azure Advanced Threat Protection?",
    options: [
      { text: "Erkennung und Untersuchung fortgeschrittener Bedrohungen", isCorrect: true },
      { text: "Basis-Virenschutz", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 126,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerorchestrierung verwendet?",
    options: [
      { text: "Azure Kubernetes Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 127,
    question: "Was ist ein Hauptmerkmal von Azure Container Instances?",
    options: [
      { text: "Serverlose Container-Ausführung", isCorrect: true },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 128,
    question: "Welche Funktion bietet Azure Service Fabric?",
    options: [
      { text: "Microservices-Plattform", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 129,
    question: "Was ist ein Vorteil von Azure DevTest Labs?",
    options: [
      { text: "Effiziente Entwicklungs- und Testumgebungen", isCorrect: true },
      { text: "Produktionsumgebungen", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 130,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Entwicklungsprojekten verwendet?",
    options: [
      { text: "Azure DevOps", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 131,
    question: "Was ist ein Hauptmerkmal von Azure Event Hubs?",
    options: [
      { text: "Verarbeitung großer Mengen von Ereignisdaten", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Verwaltung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 132,
    question: "Welche Funktion bietet Azure Service Bus?",
    options: [
      { text: "Enterprise-Messaging und Nachrichtenwarteschlangen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 133,
    question: "Was ist ein Vorteil von Azure Storage Queue?",
    options: [
      { text: "Asynchrone Nachrichtenverarbeitung", isCorrect: true },
      { text: "Synchrone Kommunikation", isCorrect: false },
      { text: "Datenbankreplikation", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 134,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridnetzwerken verwendet?",
    options: [
      { text: "Azure Virtual WAN", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 135,
    question: "Was ist ein Hauptmerkmal von Azure Private Link?",
    options: [
      { text: "Privater Zugriff auf Azure PaaS-Dienste", isCorrect: true },
      { text: "Öffentlicher Zugriff", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 136,
    question: "Welche Funktion bietet Azure Front Door?",
    options: [
      { text: "Globales Routing und Lastausgleich", isCorrect: true },
      { text: "Lokales Routing", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 137,
    question: "Was ist ein Vorteil von Azure Application Gateway?",
    options: [
      { text: "Web-Anwendungs-Lastausgleich und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 138,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Hub", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 139,
    question: "Was ist ein Hauptmerkmal von Azure Cognitive Services?",
    options: [
      { text: "KI und maschinelles Lernen als Service", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 140,
    question: "Welche Funktion bietet Azure Machine Learning?",
    options: [
      { text: "Entwicklung und Bereitstellung von ML-Modellen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 141,
    question: "Was ist ein Vorteil von Azure Databricks?",
    options: [
      { text: "Big Data-Analyse und KI-Plattform", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 142,
    question: "Welcher Azure-Dienst wird für die Verwaltung von APIs verwendet?",
    options: [
      { text: "Azure API Management", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 143,
    question: "Was ist ein Hauptmerkmal von Azure Event Hubs?",
    options: [
      { text: "Verarbeitung großer Mengen von Ereignisdaten", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Verwaltung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 144,
    question: "Welche Funktion bietet Azure Service Bus?",
    options: [
      { text: "Enterprise-Messaging und Nachrichtenwarteschlangen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 145,
    question: "Was ist ein Vorteil von Azure Storage Queue?",
    options: [
      { text: "Asynchrone Nachrichtenverarbeitung", isCorrect: true },
      { text: "Synchrone Kommunikation", isCorrect: false },
      { text: "Datenbankreplikation", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  }
,
  {
    id: 146,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridnetzwerken verwendet?",
    options: [
      { text: "Azure Virtual WAN", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 147,
    question: "Was ist ein Hauptmerkmal von Azure Private Link?",
    options: [
      { text: "Privater Zugriff auf Azure PaaS-Dienste", isCorrect: true },
      { text: "Öffentlicher Zugriff", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 148,
    question: "Welche Funktion bietet Azure Network Watcher?",
    options: [
      { text: "Netzwerküberwachung und -diagnose", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 149,
    question: "Was ist ein Vorteil von Azure Traffic Manager?",
    options: [
      { text: "Globale DNS-basierte Verkehrsverteilung", isCorrect: true },
      { text: "Lokale Verkehrsverteilung", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 150,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Verschlüsselungsschlüsseln verwendet?",
    options: [
      { text: "Azure Key Vault", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 151,
    question: "Was ist ein Hauptmerkmal von Azure Information Protection?",
    options: [
      { text: "Dokumenten- und E-Mail-Klassifizierung und -Schutz", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 152,
    question: "Welche Funktion bietet Azure AD Privileged Identity Management?",
    options: [
      { text: "Verwaltung, Kontrolle und Überwachung von Zugriffen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 153,
    question: "Was ist ein Vorteil von Azure Security Center?",
    options: [
      { text: "Einheitliche Sicherheitsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 154,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Hub", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 155,
    question: "Was ist ein Hauptmerkmal von Azure Cognitive Services?",
    options: [
      { text: "KI und maschinelles Lernen als Service", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 156,
    question: "Welche Funktion bietet Azure Machine Learning?",
    options: [
      { text: "Entwicklung und Bereitstellung von ML-Modellen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 157,
    question: "Was ist ein Vorteil von Azure DevOps?",
    options: [
      { text: "Integrierte CI/CD-Pipeline und Entwicklungstools", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 158,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containern verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 159,
    question: "Was ist ein Hauptmerkmal von Azure Logic Apps?",
    options: [
      { text: "Workflow-Automatisierung ohne Code", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 160,
    question: "Welche Funktion bietet Azure Application Insights?",
    options: [
      { text: "Anwendungsleistungsüberwachung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 161,
    question: "Was ist ein Vorteil von Azure Sentinel?",
    options: [
      { text: "SIEM- und SOAR-Lösung für Sicherheitsanalyse", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 162,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenbanken verwendet?",
    options: [
      { text: "Azure Database for MySQL", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure Virtual Machines", isCorrect: false }
    ]
  },
  {
    id: 163,
    question: "Was ist ein Hauptmerkmal von Azure Synapse Analytics?",
    options: [
      { text: "Datenintegration und Big Data-Analyse", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 164,
    question: "Welche Funktion bietet Azure Data Factory?",
    options: [
      { text: "Datenintegration und ETL-Dienst", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 165,
    question: "Was ist ein Vorteil von Azure Backup?",
    options: [
      { text: "Automatisierte Sicherung von Daten", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 166,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Medieninhalten verwendet?",
    options: [
      { text: "Azure Media Services", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 167,
    question: "Was ist ein Hauptmerkmal von Azure Site Recovery?",
    options: [
      { text: "Notfallwiederherstellung und Geschäftskontinuität", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 168,
    question: "Welche Funktion bietet Azure Firewall?",
    options: [
      { text: "Netzwerksicherheit und Filterung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 169,
    question: "Was ist ein Vorteil von Azure ExpressRoute?",
    options: [
      { text: "Private Verbindung zu Azure-Diensten", isCorrect: true },
      { text: "Öffentliche Internetverbindung", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 170,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Identitäten verwendet?",
    options: [
      { text: "Azure Active Directory", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 171,
    question: "Was ist ein Hauptmerkmal von Azure Advisor?",
    options: [
      { text: "Personalisierte Empfehlungen zur Optimierung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 172,
    question: "Welche Funktion bietet Azure Monitor?",
    options: [
      { text: "Überwachung und Analyse von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 173,
    question: "Was ist ein Vorteil von Azure Automation?",
    options: [
      { text: "Automatisierung von Cloud-Prozessen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 174,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Kubernetes verwendet?",
    options: [
      { text: "Azure Kubernetes Service (AKS)", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 175,
    question: "Was ist ein Hauptmerkmal von Azure DevTest Labs?",
    options: [
      { text: "Verwaltung von Entwicklungs- und Testumgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 176,
    question: "Welche Funktion bietet Azure Bastion?",
    options: [
      { text: "Sichere RDP/SSH-Verbindung zu VMs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 177,
    question: "Was ist ein Vorteil von Azure Virtual Desktop?",
    options: [
      { text: "Virtualisierte Windows-Desktops in der Cloud", isCorrect: true },
      { text: "Physische Desktop-Computer", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 178,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Anwendungskonfigurationen verwendet?",
    options: [
      { text: "Azure App Configuration", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 179,
    question: "Was ist ein Hauptmerkmal von Azure Front Door?",
    options: [
      { text: "Globales Routing und Lastausgleich", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 180,
    question: "Welche Funktion bietet Azure Application Gateway?",
    options: [
      { text: "Web-Anwendungs-Lastausgleich und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 181,
    question: "Was ist ein Vorteil von Azure Service Health?",
    options: [
      { text: "Personalisierte Statusüberwachung für Azure-Dienste", isCorrect: true },
      { text: "Allgemeine Statusberichte", isCorrect: false },
      { text: "Lokale Überwachung", isCorrect: false },
      { text: "Manuelle Updates", isCorrect: false }
    ]
  },
  {
    id: 182,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containern ohne Cluster verwendet?",
    options: [
      { text: "Azure Container Instances", isCorrect: true },
      { text: "Azure Kubernetes Service", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 183,
    question: "Was ist ein Hauptmerkmal von Azure Cosmos DB?",
    options: [
      { text: "Global verteilte Multi-Modell-Datenbank", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 184,
    question: "Welche Funktion bietet Azure SQL Database?",
    options: [
      { text: "Verwaltete relationale Datenbank", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 185,
    question: "Was ist ein Vorteil von Azure App Service?",
    options: [
      { text: "Einfache Bereitstellung von Web-Apps", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 186,
    question: "Welcher Azure-Dienst wird für serverlose Anwendungen verwendet?",
    options: [
      { text: "Azure Functions", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Virtual Machines", isCorrect: false }
    ]
  },
  {
    id: 187,
    question: "Was ist ein Hauptmerkmal von Azure Availability Zones?",
    options: [
      { text: "Physisch getrennte Rechenzentren innerhalb einer Region", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 188,
    question: "Welche Funktion bietet Azure Resource Manager?",
    options: [
      { text: "Bereitstellung und Verwaltung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 189,
    question: "Was ist ein Vorteil von Azure Policy?",
    options: [
      { text: "Durchsetzung von Unternehmensregeln für Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 190,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Ereignissen verwendet?",
    options: [
      { text: "Azure Event Grid", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 191,
    question: "Was ist ein Hauptmerkmal von Azure CDN?",
    options: [
      { text: "Globale Verteilung von Inhalten", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 192,
    question: "Welche Funktion bietet Azure DNS?",
    options: [
      { text: "Domainnamensystem-Hosting", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 193,
    question: "Was ist ein Vorteil von Azure Load Balancer?",
    options: [
      { text: "Verteilung von Netzwerkverkehr", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 194,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenmigrationen verwendet?",
    options: [
      { text: "Azure Database Migration Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 195,
    question: "Was ist ein Hauptmerkmal von Azure Batch?",
    options: [
      { text: "Ausführung von rechenintensiven Aufgaben", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  }
  ,
  {
    id: 196,
    question: "Welche Funktion bietet Azure Automation?",
    options: [
      { text: "Prozessautomatisierung und Konfigurationsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 197,
    question: "Was ist ein Vorteil von Azure Site Recovery?",
    options: [
      { text: "Notfallwiederherstellung und Geschäftskontinuität", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 198,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerorchestrierung verwendet?",
    options: [
      { text: "Azure Kubernetes Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 199,
    question: "Was ist ein Hauptmerkmal von Azure DevTest Labs?",
    options: [
      { text: "Schnelle Erstellung von Entwicklungs- und Testumgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 200,
    question: "Welche Funktion bietet Azure Application Insights?",
    options: [
      { text: "Anwendungsleistungsüberwachung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 201,
    question: "Was ist ein Vorteil von Azure Advisor?",
    options: [
      { text: "Personalisierte Empfehlungen zur Optimierung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 202,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Identitäten verwendet?",
    options: [
      { text: "Azure Active Directory", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 203,
    question: "Was ist ein Hauptmerkmal von Azure Policy?",
    options: [
      { text: "Durchsetzung von Unternehmensregeln und Compliance", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 204,
    question: "Welche Funktion bietet Azure Resource Manager?",
    options: [
      { text: "Bereitstellung und Verwaltung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 205,
    question: "Was ist ein Vorteil von Azure Blueprints?",
    options: [
      { text: "Standardisierte Umgebungen und Compliance", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  }
  ,
  {
    id: 206,
    question: "Welcher Azure-Dienst wird für die Überwachung und Analyse von Anwendungen verwendet?",
    options: [
      { text: "Azure Application Insights", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 207,
    question: "Was ist ein Hauptmerkmal von Azure DevOps?",
    options: [
      { text: "Entwicklungs- und Bereitstellungspipelines", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 208,
    question: "Welche Funktion bietet Azure Logic Apps?",
    options: [
      { text: "Workflow-Automatisierung ohne Code", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 209,
    question: "Was ist ein Vorteil von Azure Cosmos DB?",
    options: [
      { text: "Global verteilte Multi-Modell-Datenbank", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 210,
    question: "Welcher Azure-Dienst wird für die Bereitstellung von Webanwendungen verwendet?",
    options: [
      { text: "Azure App Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Virtual Network", isCorrect: false }
    ]
  },
  {
    id: 211,
    question: "Was ist ein Hauptmerkmal von Azure Functions?",
    options: [
      { text: "Serverlose Ausführung von Code", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 212,
    question: "Welche Funktion bietet Azure Virtual Network?",
    options: [
      { text: "Isolierte und sichere Netzwerkumgebung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 213,
    question: "Was ist ein Vorteil von Azure Backup?",
    options: [
      { text: "Automatisierte Sicherung von Daten", isCorrect: true },
      { text: "Netzwerkverwaltung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 214,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerregistrierungen verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 215,
    question: "Was ist ein Hauptmerkmal von Azure Site Recovery?",
    options: [
      { text: "Notfallwiederherstellung und Geschäftskontinuität", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 216,
    question: "Welche Funktion bietet Azure Load Balancer?",
    options: [
      { text: "Verteilung von Netzwerkverkehr auf mehrere Server", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 217,
    question: "Was ist ein Vorteil von Azure CDN?",
    options: [
      { text: "Schnelle Bereitstellung von Inhalten weltweit", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 218,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Kubernetes-Clustern verwendet?",
    options: [
      { text: "Azure Kubernetes Service (AKS)", isCorrect: true },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 219,
    question: "Was ist ein Hauptmerkmal von Azure Firewall?",
    options: [
      { text: "Verwalteter Netzwerksicherheitsdienst", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 220,
    question: "Welche Funktion bietet Azure Key Vault?",
    options: [
      { text: "Sichere Speicherung von Schlüsseln und Geheimnissen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 221,
    question: "Was ist ein Vorteil von Azure ExpressRoute?",
    options: [
      { text: "Private Verbindung zu Azure-Rechenzentren", isCorrect: true },
      { text: "Öffentliche Internetverbindung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 222,
    question: "Welcher Azure-Dienst wird für die Analyse von Protokolldaten verwendet?",
    options: [
      { text: "Azure Log Analytics", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 223,
    question: "Was ist ein Hauptmerkmal von Azure Sentinel?",
    options: [
      { text: "Sicherheitsinformations- und Ereignisverwaltung (SIEM)", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 224,
    question: "Welche Funktion bietet Azure Bastion?",
    options: [
      { text: "Sichere RDP/SSH-Verbindung zu VMs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 225,
    question: "Was ist ein Vorteil von Azure Availability Zones?",
    options: [
      { text: "Schutz vor Ausfällen ganzer Rechenzentren", isCorrect: true },
      { text: "Kostenlose Ressourcen", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 226,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Hub", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 227,
    question: "Was ist ein Hauptmerkmal von Azure Cognitive Services?",
    options: [
      { text: "KI und maschinelles Lernen als Service", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 228,
    question: "Welche Funktion bietet Azure Machine Learning?",
    options: [
      { text: "Entwicklung und Bereitstellung von ML-Modellen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 229,
    question: "Was ist ein Vorteil von Azure Databricks?",
    options: [
      { text: "Big Data-Analyse und KI-Plattform", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 230,
    question: "Welcher Azure-Dienst wird für die Verwaltung von APIs verwendet?",
    options: [
      { text: "Azure API Management", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 231,
    question: "Was ist ein Hauptmerkmal von Azure Event Hubs?",
    options: [
      { text: "Verarbeitung großer Mengen von Ereignisdaten", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Verwaltung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 232,
    question: "Welche Funktion bietet Azure Service Bus?",
    options: [
      { text: "Enterprise-Messaging und Nachrichtenwarteschlangen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 233,
    question: "Was ist ein Vorteil von Azure Storage Queue?",
    options: [
      { text: "Asynchrone Nachrichtenverarbeitung", isCorrect: true },
      { text: "Synchrone Kommunikation", isCorrect: false },
      { text: "Datenbankreplikation", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 234,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridnetzwerken verwendet?",
    options: [
      { text: "Azure Virtual WAN", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 235,
    question: "Was ist ein Hauptmerkmal von Azure Private Link?",
    options: [
      { text: "Privater Zugriff auf Azure PaaS-Dienste", isCorrect: true },
      { text: "Öffentlicher Zugriff", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 236,
    question: "Welche Funktion bietet Azure Network Watcher?",
    options: [
      { text: "Netzwerküberwachung und -diagnose", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 237,
    question: "Was ist ein Vorteil von Azure Traffic Manager?",
    options: [
      { text: "Globale DNS-basierte Verkehrsverteilung", isCorrect: true },
      { text: "Lokale Verkehrsverteilung", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 238,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Verschlüsselungsschlüsseln verwendet?",
    options: [
      { text: "Azure Key Vault", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 239,
    question: "Was ist ein Hauptmerkmal von Azure Information Protection?",
    options: [
      { text: "Dokumenten- und E-Mail-Klassifizierung und -Schutz", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 240,
    question: "Welche Funktion bietet Azure AD Privileged Identity Management?",
    options: [
      { text: "Verwaltung, Kontrolle und Überwachung von Zugriffen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 241,
    question: "Was ist ein Vorteil von Azure Security Center?",
    options: [
      { text: "Einheitliche Sicherheitsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 242,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerinstanzen verwendet?",
    options: [
      { text: "Azure Container Instances", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 243,
    question: "Was ist ein Hauptmerkmal von Azure Synapse Analytics?",
    options: [
      { text: "Integrierte Big-Data- und Datenanalyse", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 244,
    question: "Welche Funktion bietet Azure Data Factory?",
    options: [
      { text: "Datenintegration und ETL-Dienst", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 245,
    question: "Was ist ein Vorteil von Azure SQL Database?",
    options: [
      { text: "Vollständig verwaltete relationale Datenbank", isCorrect: true },
      { text: "Manuelle Verwaltung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 246,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Entwicklertests verwendet?",
    options: [
      { text: "Azure DevTest Labs", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 247,
    question: "Was ist ein Hauptmerkmal von Azure Virtual Desktop?",
    options: [
      { text: "Virtualisierte Windows-Desktops in der Cloud", isCorrect: true },
      { text: "Physische Desktop-Computer", isCorrect: false },
      { text: "Lokale Virtualisierung", isCorrect: false },
      { text: "Server-Hosting", isCorrect: false }
    ]
  },
  {
    id: 248,
    question: "Welche Funktion bietet Azure DDoS Protection?",
    options: [
      { text: "Schutz vor DDoS-Angriffen", isCorrect: true },
      { text: "Virenschutz", isCorrect: false },
      { text: "Firewall", isCorrect: false },
      { text: "Datenverschlüsselung", isCorrect: false }
    ]
  },
  {
    id: 249,
    question: "Was ist ein Vorteil von Azure Front Door?",
    options: [
      { text: "Globales Routing und Lastausgleich", isCorrect: true },
      { text: "Lokales Routing", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 250,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Kubernetes-Clustern verwendet?",
    options: [
      { text: "Azure Kubernetes Service (AKS)", isCorrect: true },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 251,
    question: "Was ist ein Hauptmerkmal von Azure Application Gateway?",
    options: [
      { text: "Web-Anwendungs-Lastausgleich und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 252,
    question: "Welche Funktion bietet Azure Blob Storage?",
    options: [
      { text: "Speicherung unstrukturierter Daten", isCorrect: true },
      { text: "Relationale Datenbank", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 253,
    question: "Was ist ein Vorteil von Azure Files?",
    options: [
      { text: "Vollständig verwaltete Dateifreigaben in der Cloud", isCorrect: true },
      { text: "Lokale Dateifreigaben", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 254,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Medieninhalten verwendet?",
    options: [
      { text: "Azure Media Services", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 255,
    question: "Was ist ein Hauptmerkmal von Azure Service Health?",
    options: [
      { text: "Personalisierte Statusüberwachung für Azure-Dienste", isCorrect: true },
      { text: "Allgemeine Statusberichte", isCorrect: false },
      { text: "Lokale Überwachung", isCorrect: false },
      { text: "Manuelle Updates", isCorrect: false }
    ]
  },
  {
    id: 256,
    question: "Welche Funktion bietet Azure File Sync?",
    options: [
      { text: "Synchronisation von Dateien zwischen Windows-Servern und Azure", isCorrect: true },
      { text: "E-Mail-Synchronisation", isCorrect: false },
      { text: "Datenbanksynchronisation", isCorrect: false },
      { text: "Netzwerksynchronisation", isCorrect: false }
    ]
  },
  {
    id: 257,
    question: "Was ist ein Vorteil von Azure Dedicated Host?",
    options: [
      { text: "Physische Server exklusiv für einen Kunden", isCorrect: true },
      { text: "Geteilte Ressourcen", isCorrect: false },
      { text: "Kostenlose Nutzung", isCorrect: false },
      { text: "Automatische Skalierung", isCorrect: false }
    ]
  },
  {
    id: 258,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerregistrierungen verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Kubernetes Service", isCorrect: false },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false }
    ]
  },
  {
    id: 259,
    question: "Was ist ein Hauptmerkmal von Azure Stack?",
    options: [
      { text: "Bereitstellung von Azure-Diensten in lokalen Rechenzentren", isCorrect: true },
      { text: "Cloud-only Lösung", isCorrect: false },
      { text: "Kostenlose Dienste", isCorrect: false },
      { text: "Öffentliche Cloud", isCorrect: false }
    ]
  },
  {
    id: 260,
    question: "Welche Funktion bietet Azure Time Series Insights?",
    options: [
      { text: "Analyse von zeitbasierten Daten", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false }
    ]
  },
  {
    id: 261,
    question: "Was ist ein Vorteil von Azure Databricks?",
    options: [
      { text: "Apache Spark-basierte Analytics-Plattform", isCorrect: true },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Netzwerksicherheit", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 262,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Medieninhalten verwendet?",
    options: [
      { text: "Azure Media Services", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 263,
    question: "Was ist ein Hauptmerkmal von Azure HDInsight?",
    options: [
      { text: "Verwaltete Open-Source-Analytics-Dienste", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 264,
    question: "Welche Funktion bietet Azure Stream Analytics?",
    options: [
      { text: "Echtzeitanalyse von Streaming-Daten", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 265,
    question: "Was ist ein Vorteil von Azure Data Lake Storage?",
    options: [
      { text: "Hochleistungsspeicher für Big-Data-Analysen", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 266,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenbanken verwendet?",
    options: [
      { text: "Azure Database for MySQL", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure Virtual Network", isCorrect: false }
    ]
  },
  {
    id: 267,
    question: "Was ist ein Hauptmerkmal von Azure Cache for Redis?",
    options: [
      { text: "In-Memory-Datenspeicherung für schnellen Zugriff", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 268,
    question: "Welche Funktion bietet Azure Automation?",
    options: [
      { text: "Prozessautomatisierung und Konfigurationsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 269,
    question: "Was ist ein Vorteil von Azure Managed Disks?",
    options: [
      { text: "Automatische Skalierung und Verwaltung von Speicher", isCorrect: true },
      { text: "Kostenlose Nutzung", isCorrect: false },
      { text: "Unbegrenzte Kapazität", isCorrect: false },
      { text: "Manuelle Konfiguration", isCorrect: false }
    ]
  },
  {
    id: 270,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridverbindungen verwendet?",
    options: [
      { text: "Azure ExpressRoute", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 271,
    question: "Was ist ein Hauptmerkmal von Azure DNS?",
    options: [
      { text: "Hosting von DNS-Domains in Azure", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 272,
    question: "Welche Funktion bietet Azure Batch?",
    options: [

      { text: "Ausführung von rechenintensiven Aufgaben in der Cloud", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 273,
    question: "Was ist ein Vorteil von Azure Advisor?",
    options: [
      { text: "Personalisierte Empfehlungen zur Optimierung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 274,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerregistrierungen verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 275,
    question: "Was ist ein Hauptmerkmal von Azure Synapse Analytics?",
    options: [
      { text: "Datenanalyse und Big Data-Verarbeitung", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 276,
    question: "Welche Funktion bietet Azure Data Factory?",
    options: [
      { text: "Datenintegration und ETL-Dienste", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 277,
    question: "Was ist ein Vorteil von Azure DevTest Labs?",
    options: [
      { text: "Schnelle Erstellung von Entwicklungs- und Testumgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 278,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Anwendungskonfigurationen verwendet?",
    options: [
      { text: "Azure App Configuration", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 279,
    question: "Was ist ein Hauptmerkmal von Azure Sentinel?",
    options: [
      { text: "SIEM und SOAR-Lösung für Sicherheitsanalyse", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 280,
    question: "Welche Funktion bietet Azure Firewall?",
    options: [
      { text: "Netzwerksicherheit und Filterung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 281,
    question: "Was ist ein Vorteil von Azure Backup?",
    options: [
      { text: "Zentralisierte Sicherung von Daten in der Cloud", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 282,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Ereignissen verwendet?",
    options: [
      { text: "Azure Event Grid", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 283,
    question: "Was ist ein Hauptmerkmal von Azure HDInsight?",
    options: [
      { text: "Verwaltete Open-Source-Analysedienste", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 284,
    question: "Welche Funktion bietet Azure Site Recovery?",
    options: [
      { text: "Notfallwiederherstellung und Geschäftskontinuität", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 285,
    question: "Was ist ein Vorteil von Azure Application Insights?",
    options: [
      { text: "Anwendungsleistungsüberwachung und -diagnose", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 286,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Medieninhalten verwendet?",
    options: [
      { text: "Azure Media Services", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 287,
    question: "Was ist ein Hauptmerkmal von Azure Cosmos DB?",
    options: [
      { text: "Global verteilte Multi-Modell-Datenbank", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 288,
    question: "Welche Funktion bietet Azure Redis Cache?",
    options: [
      { text: "In-Memory-Datencaching für schnelle Anwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 289,
    question: "Was ist ein Vorteil von Azure Kubernetes Service (AKS)?",
    options: [
      { text: "Vereinfachte Bereitstellung und Verwaltung von Kubernetes", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Manuelle Konfiguration", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 290,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Identitäten verwendet?",
    options: [
      { text: "Azure Active Directory", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 291,
    question: "Was ist ein Hauptmerkmal von Azure DevOps?",
    options: [
      { text: "Entwicklungstools und CI/CD-Pipelines", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 292,
    question: "Welche Funktion bietet Azure Monitor?",
    options: [
      { text: "Überwachung und Analyse von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 293,
    question: "Was ist ein Vorteil von Azure Virtual Network?",
    options: [
      { text: "Isolierte und sichere Netzwerkumgebung in der Cloud", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 294,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenbanken verwendet?",
    options: [
      { text: "Azure SQL Database", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure Virtual Machines", isCorrect: false }
    ]
  },
  {
    id: 295,
    question: "Was ist ein Hauptmerkmal von Azure App Service?",
    options: [
      { text: "Plattform zum Erstellen und Hosten von Webanwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 296,
    question: "Welche Funktion bietet Azure Content Delivery Network (CDN)?",
    options: [
      { text: "Schnelle Bereitstellung von Inhalten weltweit", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 297,
    question: "Was ist ein Vorteil von Azure Logic Apps?",
    options: [
      { text: "Workflow-Automatisierung ohne Code", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 298,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Sicherheitsrichtlinien verwendet?",
    options: [
      { text: "Azure Policy", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 299,
    question: "Was ist ein Hauptmerkmal von Azure Databricks?",
    options: [
      { text: "Big Data-Analyse und KI-Plattform", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 300,
    question: "Welche Funktion bietet Azure API Management?",
    options: [
      { text: "Veröffentlichung, Verwaltung und Analyse von APIs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 301,
    question: "Was ist ein Vorteil von Azure Cognitive Search?",
    options: [
      { text: "KI-gestützte Suchfunktionen für Anwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 302,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containern verwendet?",
    options: [
      { text: "Azure Container Instances", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 303,
    question: "Was ist ein Hauptmerkmal von Azure Security Center?",
    options: [
      { text: "Einheitliche Sicherheitsverwaltung und Bedrohungsschutz", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 304,
    question: "Welche Funktion bietet Azure Stream Analytics?",
    options: [
      { text: "Echtzeitanalyse von Streaming-Daten", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 305,
    question: "Was ist ein Vorteil von Azure Load Balancer?",
    options: [
      { text: "Gleichmäßige Verteilung des Netzwerkverkehrs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 306,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Schlüsseln und Geheimnissen verwendet?",
    options: [
      { text: "Azure Key Vault", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 307,
    question: "Was ist ein Hauptmerkmal von Azure Data Lake Storage?",
    options: [
      { text: "Hochleistungsspeicher für Big-Data-Analysen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 308,
    question: "Welche Funktion bietet Azure Application Gateway?",
    options: [
      { text: "Web-Anwendungs-Lastausgleich und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 309,
    question: "Was ist ein Vorteil von Azure Automation?",
    options: [
      { text: "Automatisierung von Cloud-Verwaltungsaufgaben", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 310,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Hub", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 311,
    question: "Was ist ein Hauptmerkmal von Azure Cognitive Services?",
    options: [
      { text: "KI-Funktionen für Anwendungen ohne ML-Kenntnisse", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 312,
    question: "Welche Funktion bietet Azure Virtual Desktop?",
    options: [
      { text: "Virtualisierte Windows-Desktops in der Cloud", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 313,
    question: "Was ist ein Vorteil von Azure Front Door?",
    options: [
      { text: "Globales Routing und Lastausgleich", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 314,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridnetzwerken verwendet?",
    options: [
      { text: "Azure ExpressRoute", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 315,
    question: "Was ist ein Hauptmerkmal von Azure Bastion?",
    options: [
      { text: "Sichere RDP/SSH-Verbindung zu VMs", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 316,
    question: "Welche Funktion bietet Azure DDoS Protection?",
    options: [
      { text: "Schutz vor DDoS-Angriffen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 317,
    question: "Was ist ein Vorteil von Azure Service Health?",
    options: [
      { text: "Personalisierte Statusüberwachung für Azure-Dienste", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 318,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Entwicklertests verwendet?",
    options: [
      { text: "Azure DevTest Labs", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 319,
    question: "Was ist ein Hauptmerkmal von Azure Private Link?",
    options: [
      { text: "Privater Zugriff auf Azure PaaS-Dienste", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 320,
    question: "Welche Funktion bietet Azure Network Watcher?",
    options: [
      { text: "Netzwerküberwachung und -diagnose", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 321,
    question: "Was ist ein Vorteil von Azure Traffic Manager?",
    options: [
      { text: "Globale DNS-basierte Verkehrsverteilung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 322,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Verschlüsselungsschlüsseln verwendet?",
    options: [
      { text: "Azure Key Vault", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 323,
    question: "Was ist ein Hauptmerkmal von Azure Information Protection?",
    options: [
      { text: "Dokumenten- und E-Mail-Klassifizierung und -Schutz", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 324,
    question: "Welche Funktion bietet Azure AD Privileged Identity Management?",
    options: [
      { text: "Verwaltung, Kontrolle und Überwachung von Zugriffen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 325,
    question: "Was ist ein Vorteil von Azure Security Center?",
    options: [
      { text: "Einheitliche Sicherheitsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 326,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Compliance verwendet?",
    options: [
      { text: "Azure Policy", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 327,
    question: "Was ist ein Hauptmerkmal von Azure Blueprints?",
    options: [
      { text: "Standardisierte Bereitstellung von Azure-Umgebungen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 328,
    question: "Welche Funktion bietet Azure Resource Manager?",
    options: [
      { text: "Bereitstellung und Verwaltung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 329,
    question: "Was ist ein Vorteil von Azure Cost Management?",
    options: [
      { text: "Überwachung und Optimierung von Azure-Ausgaben", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 330,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenmigrationen verwendet?",
    options: [
      { text: "Azure Database Migration Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 331,
    question: "Was ist ein Hauptmerkmal von Azure Arc?",
    options: [
      { text: "Verwaltung von Hybrid- und Multi-Cloud-Umgebungen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 332,
    question: "Welche Funktion bietet Azure Lighthouse?",
    options: [
      { text: "Delegierte Ressourcenverwaltung für Dienstanbieter", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 333,
    question: "Was ist ein Vorteil von Azure Dedicated Host?",
    options: [
      { text: "Physische Server exklusiv für Ihre VMs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 334,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybrididentitäten verwendet?",
    options: [
      { text: "Azure AD Connect", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 335,
    question: "Was ist ein Hauptmerkmal von Azure Sphere?",
    options: [
      { text: "Sicherheitsplattform für IoT-Geräte", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 336,
    question: "Welche Funktion bietet Azure Time Series Insights?",
    options: [
      { text: "Analyse und Visualisierung von Zeitreihendaten", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 337,
    question: "Was ist ein Vorteil von Azure Migrate?",
    options: [
      { text: "Bewertung und Migration lokaler Workloads zu Azure", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 338,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenanalysen verwendet?",
    options: [
      { text: "Azure Synapse Analytics", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {

    id: 339,
    question: "Was ist ein Hauptmerkmal von Azure Data Factory?",
    options: [
      { text: "Datenintegration und ETL-Dienst", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false }
    ]
  },
  {
    id: 340,
    question: "Welche Funktion bietet Azure Data Lake Storage?",
    options: [
      { text: "Hochleistungsspeicher für Big-Data-Analysen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 341,
    question: "Was ist ein Vorteil von Azure Stream Analytics?",
    options: [
      { text: "Echtzeitanalyse von Streaming-Daten", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 342,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containern verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 343,
    question: "Was ist ein Hauptmerkmal von Azure DevOps?",
    options: [
      { text: "Entwicklungs- und Kollaborationsplattform", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 344,
    question: "Welche Funktion bietet Azure Automation?",
    options: [
      { text: "Prozessautomatisierung und Konfigurationsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 345,
    question: "Was ist ein Vorteil von Azure Site Recovery?",
    options: [
      { text: "Notfallwiederherstellung und Geschäftskontinuität", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 346,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Serverless-Anwendungen verwendet?",
    options: [
      { text: "Azure Functions", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Virtual Machines", isCorrect: false }
    ]
  },
  {
    id: 347,
    question: "Was ist ein Hauptmerkmal von Azure Cosmos DB?",
    options: [
      { text: "Global verteilte Multi-Modell-Datenbank", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 348,
    question: "Welche Funktion bietet Azure HDInsight?",
    options: [
      { text: "Verwalteter Hadoop-Dienst für Big Data", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 349,
    question: "Was ist ein Vorteil von Azure Kubernetes Service (AKS)?",
    options: [
      { text: "Vereinfachte Bereitstellung und Verwaltung von Kubernetes", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Manuelle Konfiguration", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 350,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Identitäten verwendet?",
    options: [
      { text: "Azure Active Directory", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 351,
    question: "Was ist ein Hauptmerkmal von Azure Firewall?",
    options: [
      { text: "Verwalteter Netzwerksicherheitsdienst", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 352,
    question: "Welche Funktion bietet Azure Application Gateway?",
    options: [
      { text: "Lastausgleich und Anwendungsbereitstellung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 353,
    question: "Was ist ein Vorteil von Azure Virtual Network?",
    options: [
      { text: "Isolierte und sichere Netzwerkumgebung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 354,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenbanken verwendet?",
    options: [
      { text: "Azure SQL Database", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure Virtual Machines", isCorrect: false }
    ]
  },
  {
    id: 355,
    question: "Was ist ein Hauptmerkmal von Azure Logic Apps?",
    options: [
      { text: "Workflow-Automatisierung und Integration", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 356,
    question: "Welche Funktion bietet Azure Monitor?",
    options: [
      { text: "Überwachung und Diagnose von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 357,
    question: "Was ist ein Vorteil von Azure Backup?",
    options: [
      { text: "Zentralisierte Sicherung von Azure und lokalen Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 358,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Central", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 359,
    question: "Was ist ein Hauptmerkmal von Azure Security Center?",
    options: [
      { text: "Einheitliche Sicherheitsverwaltung und Bedrohungsschutz", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 360,
    question: "Welche Funktion bietet Azure Sentinel?",
    options: [
      { text: "SIEM- und SOAR-Lösung für Sicherheitsanalysen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 361,
    question: "Was ist ein Vorteil von Azure Key Vault?",
    options: [
      { text: "Sichere Speicherung von Schlüsseln und Geheimnissen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 362,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Medieninhalten verwendet?",
    options: [
      { text: "Azure Media Services", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 363,
    question: "Was ist ein Hauptmerkmal von Azure CDN?",
    options: [
      { text: "Globale Inhaltsbereitstellung mit niedriger Latenz", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 364,
    question: "Welche Funktion bietet Azure App Service?",
    options: [
      { text: "Plattform zum Erstellen und Hosten von Webanwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 365,
    question: "Was ist ein Vorteil von Azure ExpressRoute?",
    options: [
      { text: "Private Verbindung zwischen lokalen Netzwerken und Azure", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 366,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Ereignissen verwendet?",
    options: [
      { text: "Azure Event Grid", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 367,
    question: "Was ist ein Hauptmerkmal von Azure Batch?",
    options: [
      { text: "Ausführung von rechenintensiven Aufgaben in der Cloud", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 368,
    question: "Welche Funktion bietet Azure Redis Cache?",
    options: [
      { text: "In-Memory-Datenspeicherung für schnellen Zugriff", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 369,
    question: "Was ist ein Vorteil von Azure API Management?",
    options: [
      { text: "Zentrale Verwaltung und Veröffentlichung von APIs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 370,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridnetzwerken verwendet?",
    options: [
      { text: "Azure Virtual WAN", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 371,
    question: "Was ist ein Hauptmerkmal von Azure Bastion?",
    options: [
      { text: "Sichere RDP- und SSH-Verbindung zu VMs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 372,
    question: "Welche Funktion bietet Azure Advisor?",
    options: [
      { text: "Personalisierte Empfehlungen zur Optimierung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 373,
    question: "Was ist ein Vorteil von Azure DevTest Labs?",
    options: [
      { text: "Schnelles Erstellen von Entwicklungs- und Testumgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 374,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containeranwendungen verwendet?",
    options: [
      { text: "Azure Container Instances", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 375,
    question: "Was ist ein Hauptmerkmal von Azure Service Fabric?",
    options: [
      { text: "Plattform für verteilte Systeme und Microservices", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 376,
    question: "Welche Funktion bietet Azure Cognitive Search?",
    options: [
      { text: "KI-gestützte Suchdienste für Anwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 377,
    question: "Was ist ein Vorteil von Azure Bot Service?",
    options: [
      { text: "Entwicklung intelligenter Chatbots", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 378,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenmigrationen verwendet?",
    options: [
      { text: "Azure Database Migration Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 379,
    question: "Was ist ein Hauptmerkmal von Azure Blueprints?",
    options: [
      { text: "Standardisierte Bereitstellung von Azure-Umgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 380,
    question: "Welche Funktion bietet Azure Policy?",
    options: [
      { text: "Durchsetzung von Unternehmensregeln und Compliance", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 381,
    question: "Was ist ein Vorteil von Azure Cost Management?",
    options: [
      { text: "Überwachung und Optimierung von Azure-Ausgaben", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 382,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybrididentitäten verwendet?",
    options: [
      { text: "Azure AD B2C", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 383,
    question: "Was ist ein Hauptmerkmal von Azure Information Protection?",
    options: [
      { text: "Klassifizierung und Schutz von Dokumenten und E-Mails", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 384,
    question: "Welche Funktion bietet Azure Defender?",
    options: [
      { text: "Erweiterte Bedrohungserkennung und -abwehr", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 385,
    question: "Was ist ein Vorteil von Azure Arc?",
    options: [
      { text: "Verwaltung von Hybrid- und Multi-Cloud-Umgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 386,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Anwendungskonfigurationen verwendet?",
    options: [
      { text: "Azure App Configuration", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 387,
    question: "Was ist ein Hauptmerkmal von Azure Spring Cloud?",
    options: [
      { text: "Verwalteter Dienst für Spring Boot-Anwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 388,
    question: "Welche Funktion bietet Azure Communication Services?",
    options: [
      { text: "Kommunikationsfunktionen für Anwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 389,
    question: "Was ist ein Vorteil von Azure Lighthouse?",
    options: [
      { text: "Skalierte Verwaltung von Azure-Ressourcen für Dienstanbieter", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 390,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Netzwerkverbindungen verwendet?",
    options: [
      { text: "Azure VPN Gateway", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 391,
    question: "Was ist ein Hauptmerkmal von Azure Stack?",
    options: [
      { text: "Erweiterung von Azure in lokale Umgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 392,
    question: "Welche Funktion bietet Azure Purview?",
    options: [
      { text: "Datengovernance und Katalogisierung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 393,
    question: "Was ist ein Vorteil von Azure Quantum?",
    options: [
      { text: "Zugang zu Quantencomputing-Ressourcen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 394,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenanalysen verwendet?",
    options: [
      { text: "Azure Analysis Services", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 395,
    question: "Was ist ein Hauptmerkmal von Azure Health Bot?",
    options: [
      { text: "Intelligente virtuelle Gesundheitsassistenten", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 396,
    question: "Welche Funktion bietet Azure Orbital?",
    options: [
      { text: "Satellitenkommunikation als Dienst", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 397,
    question: "Was ist ein Vorteil von Azure Percept?",
    options: [
      { text: "KI-Lösungen für Edge-Geräte", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 398,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Blockchain verwendet?",
    options: [
      { text: "Azure Blockchain Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 399,
    question: "Was ist ein Hauptmerkmal von Azure Digital Twins?",
    options: [
      { text: "Erstellung digitaler Modelle physischer Umgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 400,
    question: "Welche Funktion bietet Azure SignalR Service?",
    options: [
      { text: "Echtzeit-Webfunktionalität für Anwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 401,
    question: "Was ist ein Vorteil von Azure Kinect DK?",
    options: [
      { text: "Entwicklerkit für KI-Sensoren und Computer Vision", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 402,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Metadaten verwendet?",
    options: [
      { text: "Azure Data Catalog", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 403,
    question: "Was ist ein Hauptmerkmal von Azure Spatial Anchors?",
    options: [
      { text: "Gemischte Realität und räumliche Mapping-Dienste", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 404,
    question: "Welche Funktion bietet Azure Confidential Computing?",
    options: [
      { text: "Schutz von Daten während der Verarbeitung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 405,
    question: "Was ist ein Vorteil von Azure Dedicated Host?",
    options: [
      { text: "Physische Server exklusiv für Ihre VMs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },

      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 406,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Blockchain-Netzwerken verwendet?",
    options: [
      { text: "Azure Blockchain Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 407,
    question: "Was ist ein Hauptmerkmal von Azure Quantum?",
    options: [
      { text: "Quantencomputing-Dienste und -Entwicklung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 408,
    question: "Welche Funktion bietet Azure Sphere?",
    options: [
      { text: "Sicherheit für IoT-Geräte", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 409,
    question: "Was ist ein Vorteil von Azure Percept?",
    options: [
      { text: "KI-Lösungen für Edge-Geräte", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 410,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Medieninhalten verwendet?",
    options: [
      { text: "Azure Media Services", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  }
  ,
  {
    id: 411,
    question: "Was ist ein Hauptmerkmal von Azure Synapse Analytics?",
    options: [
      { text: "Integrierte Big-Data- und Datenanalyse-Plattform", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 412,
    question: "Welche Funktion bietet Azure Purview?",
    options: [
      { text: "Datengovernance und Katalogisierung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 413,
    question: "Was ist ein Vorteil von Azure Arc?",
    options: [
      { text: "Verwaltung von Hybrid- und Multi-Cloud-Umgebungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 414,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenmigrationen verwendet?",
    options: [
      { text: "Azure Database Migration Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 415,
    question: "Was ist ein Hauptmerkmal von Azure Communication Services?",
    options: [
      { text: "Kommunikationsfunktionen für Anwendungen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  }
  ,
  {
    id: 416,
    question: "Welche Funktion bietet Azure Sentinel?",
    options: [
      { text: "Security Information and Event Management (SIEM)", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 417,
    question: "Was ist ein Vorteil von Azure Backup?",
    options: [
      { text: "Automatisierte und zentrale Sicherungslösung", isCorrect: true },
      { text: "Datenverschlüsselung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 418,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerregistrierungen verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Kubernetes Service", isCorrect: false },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false }
    ]
  },
  {
    id: 419,
    question: "Was ist ein Hauptmerkmal von Azure DevOps?",
    options: [
      { text: "Entwicklungs- und Bereitstellungspipelines", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 420,
    question: "Welche Funktion bietet Azure Site Recovery?",
    options: [
      { text: "Notfallwiederherstellung und Geschäftskontinuität", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  }
  ,
  {
    id: 421,
    question: "Was ist ein Vorteil von Azure Virtual Desktop?",
    options: [
      { text: "Virtualisierte Windows-Desktops in der Cloud", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Physische Server", isCorrect: false }
    ]
  },
  {
    id: 422,
    question: "Welcher Azure-Dienst wird für die Verwaltung von API-Schnittstellen verwendet?",
    options: [
      { text: "Azure API Management", isCorrect: true },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure Logic Apps", isCorrect: false },
      { text: "Azure App Service", isCorrect: false }
    ]
  },
  {
    id: 423,
    question: "Was ist ein Hauptmerkmal von Azure Cosmos DB?",
    options: [
      { text: "Global verteilte Multi-Modell-Datenbank", isCorrect: true },
      { text: "Relationale Datenbank", isCorrect: false },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "Dateiserver", isCorrect: false }
    ]
  },
  {
    id: 424,
    question: "Welche Funktion bietet Azure Event Grid?",
    options: [
      { text: "Ereignisbasierte Architektur und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 425,
    question: "Was ist ein Vorteil von Azure Cognitive Services?",
    options: [
      { text: "KI-Funktionen ohne Machine Learning-Kenntnisse", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 426,
    question: "Welcher Azure-Dienst wird für die Verwaltung von IoT-Geräten verwendet?",
    options: [
      { text: "Azure IoT Hub", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 427,
    question: "Was ist ein Hauptmerkmal von Azure Logic Apps?",
    options: [
      { text: "Workflow-Automatisierung ohne Code", isCorrect: true },
      { text: "Virtuelle Maschinen", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Netzwerkkonfiguration", isCorrect: false }
    ]
  },
  {
    id: 428,
    question: "Welche Funktion bietet Azure ExpressRoute?",
    options: [
      { text: "Private Verbindung zu Azure-Rechenzentren", isCorrect: true },
      { text: "Öffentliche Internetverbindung", isCorrect: false },
      { text: "Kostenlose Datenübertragung", isCorrect: false },
      { text: "Automatische Verschlüsselung", isCorrect: false }
    ]
  },
  {
    id: 429,
    question: "Was ist ein Vorteil von Azure Availability Zones?",
    options: [
      { text: "Schutz vor Ausfällen ganzer Rechenzentren", isCorrect: true },
      { text: "Kostenlose Ressourcen", isCorrect: false },
      { text: "Automatische Codebereitstellung", isCorrect: false },
      { text: "Unbegrenzte Datenspeicherung", isCorrect: false }
    ]
  },
  {
    id: 430,
    question: "Welcher Azure-Dienst wird für serverlose Anwendungen verwendet?",
    options: [
      { text: "Azure Functions", isCorrect: true },
      { text: "Azure Virtual Machines", isCorrect: false },
      { text: "Azure SQL Database", isCorrect: false },
      { text: "Azure Storage", isCorrect: false }
    ]
  }
  ,
  {
    id: 431,
    question: "Was ist ein Hauptmerkmal von Azure Cognitive Services?",
    options: [
      { text: "KI und maschinelles Lernen als Service", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 432,
    question: "Welche Funktion bietet Azure Machine Learning?",
    options: [
      { text: "Entwicklung und Bereitstellung von ML-Modellen", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 433,
    question: "Was ist ein Vorteil von Azure Databricks?",
    options: [
      { text: "Big Data-Analyse und KI-Plattform", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 434,
    question: "Welcher Azure-Dienst wird für die Verwaltung von APIs verwendet?",
    options: [
      { text: "Azure API Management", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 435,
    question: "Was ist ein Hauptmerkmal von Azure Event Hubs?",
    options: [
      { text: "Verarbeitung großer Mengen von Ereignisdaten", isCorrect: true },
      { text: "Lokale Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Verwaltung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 436,
    question: "Welche Funktion bietet Azure Service Bus?",
    options: [
      { text: "Enterprise-Messaging und Nachrichtenwarteschlangen", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankdienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 437,
    question: "Was ist ein Vorteil von Azure Storage Queue?",
    options: [
      { text: "Asynchrone Nachrichtenverarbeitung", isCorrect: true },
      { text: "Synchrone Kommunikation", isCorrect: false },
      { text: "Datenbankreplikation", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 438,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Hybridnetzwerken verwendet?",
    options: [
      { text: "Azure Virtual WAN", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 439,
    question: "Was ist ein Hauptmerkmal von Azure Private Link?",
    options: [
      { text: "Privater Zugriff auf Azure PaaS-Dienste", isCorrect: true },
      { text: "Öffentlicher Zugriff", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 440,
    question: "Welche Funktion bietet Azure Media Services?",
    options: [
      { text: "Video- und Streaming-Dienste", isCorrect: true },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 441,
    question: "Was ist ein Vorteil von Azure Service Health?",
    options: [
      { text: "Personalisierte Statusüberwachung für Azure-Dienste", isCorrect: true },
      { text: "Allgemeine Statusberichte", isCorrect: false },
      { text: "Lokale Überwachung", isCorrect: false },
      { text: "Manuelle Updates", isCorrect: false }
    ]
  },
  {
    id: 442,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Entwicklertests verwendet?",
    options: [
      { text: "Azure DevTest Labs", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 443,
    question: "Was ist ein Hauptmerkmal von Azure Bastion?",
    options: [
      { text: "Sichere RDP/SSH-Verbindung zu VMs", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 444,
    question: "Was ist ein Hauptmerkmal von Azure Virtual Desktop?",
    options: [
      { text: "Virtualisierte Windows-Desktops in der Cloud", isCorrect: true },
      { text: "Physische Desktop-Computer", isCorrect: false },
      { text: "Lokale Virtualisierung", isCorrect: false },
      { text: "Server-Hosting", isCorrect: false }
    ]
  },
  {
    id: 445,
    question: "Welche Funktion bietet Azure DDoS Protection?",
    options: [
      { text: "Schutz vor DDoS-Angriffen", isCorrect: true },
      { text: "Virenschutz", isCorrect: false },
      { text: "Firewall", isCorrect: false },
      { text: "Datenverschlüsselung", isCorrect: false }
    ]
  },
  {
    id: 446,
    question: "Was ist ein Vorteil von Azure Front Door?",
    options: [
      { text: "Globales Routing und Lastausgleich", isCorrect: true },
      { text: "Lokales Routing", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 447,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Kubernetes-Clustern verwendet?",
    options: [
      { text: "Azure Kubernetes Service (AKS)", isCorrect: true },
      { text: "Azure Container Instances", isCorrect: false },
      { text: "Azure App Service", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 448,
    question: "Was ist ein Hauptmerkmal von Azure Application Gateway?",
    options: [
      { text: "Web-Anwendungs-Lastausgleich und Routing", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 449,
    question: "Was ist ein Hauptmerkmal von Azure Stack?",
    options: [
      { text: "Bereitstellung von Azure-Diensten in lokalen Rechenzentren", isCorrect: true },
      { text: "Cloud-only Lösung", isCorrect: false },
      { text: "Kostenlose Dienste", isCorrect: false },
      { text: "Öffentliche Cloud", isCorrect: false }
    ]
  },
  {
    id: 450,
    question: "Welche Funktion bietet Azure Time Series Insights?",
    options: [
      { text: "Analyse von zeitbasierten Daten", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false }
    ]
  }
  ,
  {
    id: 451,
    question: "Was ist ein Vorteil von Azure Synapse Analytics?",
    options: [
      { text: "Integrierte Big-Data- und Datenanalyse", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 452,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Containerregistrierungen verwendet?",
    options: [
      { text: "Azure Container Registry", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  },
  {
    id: 453,
    question: "Was ist ein Hauptmerkmal von Azure Sentinel?",
    options: [
      { text: "Security Information and Event Management (SIEM)", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 454,
    question: "Welche Funktion bietet Azure Advisor?",
    options: [
      { text: "Personalisierte Empfehlungen zur Optimierung von Azure-Ressourcen", isCorrect: true },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false },
      { text: "E-Mail-Dienste", isCorrect: false }
    ]
  },
  {
    id: 455,
    question: "Was ist ein Vorteil von Azure Arc?",
    options: [
      { text: "Verwaltung von Hybrid- und Multi-Cloud-Umgebungen", isCorrect: true },
      { text: "Nur Cloud-Verwaltung", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 456,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Datenmigrationen verwendet?",
    options: [
      { text: "Azure Database Migration Service", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure Functions", isCorrect: false },
      { text: "Azure App Service", isCorrect: false }
    ]
  },
  {
    id: 457,
    question: "Was ist ein Hauptmerkmal von Azure Automation?",
    options: [
      { text: "Prozessautomatisierung und Konfigurationsverwaltung", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 458,
    question: "Welche Funktion bietet Azure Site Recovery?",
    options: [
      { text: "Notfallwiederherstellung und Geschäftskontinuität", isCorrect: true },
      { text: "Webhosting", isCorrect: false },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 459,
    question: "Was ist ein Vorteil von Azure Backup?",
    options: [
      { text: "Zentralisierte Sicherungsverwaltung für Cloud und On-Premises", isCorrect: true },
      { text: "Nur lokale Sicherungen", isCorrect: false },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false }
    ]
  },
  {
    id: 460,
    question: "Welcher Azure-Dienst wird für die Verwaltung von Ereignissen verwendet?",
    options: [
      { text: "Azure Event Grid", isCorrect: true },
      { text: "Azure Storage", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Functions", isCorrect: false }
    ]
  }
  ,
  {
    id: 461,
    question: "Was ist ein Hauptmerkmal von Azure DevOps?",
    options: [
      { text: "Entwicklungs- und Bereitstellungspipelines", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 462,
    question: "Welche Funktion bietet Azure Key Vault?",
    options: [
      { text: "Sichere Speicherung von Schlüsseln und Geheimnissen", isCorrect: true },
      { text: "Datenbankhosting", isCorrect: false },
      { text: "Netzwerkverwaltung", isCorrect: false },
      { text: "Containerorchestrierung", isCorrect: false }
    ]
  },
  {
    id: 463,
    question: "Was ist ein Vorteil von Azure Security Center?",
    options: [
      { text: "Einheitliche Sicherheitsverwaltung und Bedrohungsschutz", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 464,
    question: "Welcher Azure-Dienst wird für serverlose Anwendungen verwendet?",
    options: [
      { text: "Azure Functions", isCorrect: true },
      { text: "Azure Virtual Machines", isCorrect: false },
      { text: "Azure SQL", isCorrect: false },
      { text: "Azure Storage", isCorrect: false }
    ]
  },
  {
    id: 465,
    question: "Was ist ein Hauptmerkmal von Azure Logic Apps?",
    options: [
      { text: "Workflow-Automatisierung ohne Code", isCorrect: true },
      { text: "Datenspeicherung", isCorrect: false },
      { text: "Containerisierung", isCorrect: false },
      { text: "Webhosting", isCorrect: false }
    ]
  },
  {
    id: 466,
    question: "Schnellere Innovation ist ein wesentlicher Vorteil des Cloud Computing, der direkt mit den Kosten zusammenhängt.",
    options: [
      { text: "Wahr", isCorrect: false },
      { text: "Falsch", isCorrect: true }
    ]
  },
  
  {
    id: 467,
    question: "In einer PaaS-Umgebung ist der Kunde für das zugrundeliegende Betriebssystem verantwortlich.",
    options: [
      { text: "Wahr", isCorrect: false },
      { text: "Falsch", isCorrect: true }
    ]
  },
  
  {
    id: 468,
    question: "Pay as You Go ist das beste Azure-Preismodell für langfristige Projekte mit vorhersehbaren Ressourcenanforderungen.",
    options: [
      { text: "Wahr", isCorrect: false },
      { text: "Falsch", isCorrect: true }
    ]
  },
  
  {
    id: 469,
    question: "In Azure können Billing Profiles verwendet werden, um die Abrechnung für verschiedene Abteilungen zu trennen.",
    options: [
      { text: "Wahr", isCorrect: true },
      { text: "Falsch", isCorrect: false }
    ]
  },
  
  {
    id: 470,
    question: "In einem Zero Trust-Modell bezieht sich das Prinzip 'Verify Explicitly' darauf, Benutzer immer auf Basis aller verfügbaren Datenpunkte zu authentifizieren und zu autorisieren.",
    options: [
      { text: "Wahr", isCorrect: true },
      { text: "Falsch", isCorrect: false }
    ]
  },
  
  {
    id: 471,
    question: "In Azure RBAC erfordert eine Active Assignment, dass der Benutzer eine Aktion durchführt, wie z.B. Multi-Faktor-Authentifizierung (MFA), um die Rolle zu nutzen.",
    options: [
      { text: "Wahr", isCorrect: false },
      { text: "Falsch", isCorrect: true }
    ]
  },
  
  {
    id: 472,
    question: "Für eine Organisation, die vollständige Kontrolle über Ressourcen und Sicherheit wünscht, aber bereit ist, die Hardwarewartung zu übernehmen, ist das am besten geeignete Cloud-Modell: ___________",
    options: [
      { text: "Private Cloud", isCorrect: false },
      { text: "Public Cloud", isCorrect: true },
      { text: "Community Cloud", isCorrect: false },
      { text: "Hybrid Cloud", isCorrect: false }
    ]
  },
  
  {
    id: 473,
    question: "___________ ist KEIN typisches Szenario, das durch Infrastructure as a Service (IaaS) abgedeckt wird.",
    options: [
      { text: "Test und Entwicklung", isCorrect: false },
      { text: "Lift-and-shift Migration", isCorrect: false },
      { text: "Storage, Backup und Recovery", isCorrect: false },
      { text: "Echtzeit-Analytik", isCorrect: true }
    ]
  },
  
  {
    id: 474,
    question: "Im Shared Responsibility Model des Cloud Computing ist ___________ KEINE geteilte Verantwortung.",
    options: [
      { text: "Daten", isCorrect: false },
      { text: "Endpoints", isCorrect: false },
      { text: "Account", isCorrect: false },
      { text: "Cloud Infrastructure", isCorrect: true }
    ]
  },
  {
    id: 475,
    question: "In Azure, der ___________ Service erlaubt es dir, dich auf die Anwendungslogik zu konzentrieren, während Azure sich um die Infrastruktur kümmert.",
    options: [
      { text: "App Service", isCorrect: true },
      { text: "Virtual Machine", isCorrect: false },
      { text: "Storage Account", isCorrect: false },
      { text: "Network Security Group", isCorrect: false }
    ]
  },
  {
    id: 476,
    question: "Welches der folgenden ist KEIN Vorteil des verbrauchsbasierten Modells im Cloud Computing?",
    options: [
      { text: "Keine Vorabkosten", isCorrect: false },
      { text: "Möglichkeit, nur bei Bedarf für zusätzliche Ressourcen zu bezahlen", isCorrect: false },
      { text: "Feste monatliche Abrechnung", isCorrect: true },
      { text: "Möglichkeit, die Zahlung für nicht mehr benötigte Ressourcen zu stoppen", isCorrect: false }
    ]
   }

];