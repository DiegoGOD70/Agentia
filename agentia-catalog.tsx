"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Store,
  GraduationCap,
  CreditCard,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  Sparkles,
  Target,
  ArrowRight,
} from "lucide-react"

export default function AgentiaCatalog() {
  const [activeSection, setActiveSection] = useState("inicio")

  const sections = [
    { id: "inicio", label: "Inicio", icon: Bot },
    { id: "caracteristicas", label: "Características", icon: Sparkles },
    { id: "beneficios", label: "Beneficios", icon: TrendingUp },
    { id: "precios", label: "Precios", icon: DollarSign },
    { id: "audiencia", label: "Audiencia", icon: Target },
    { id: "contacto", label: "Contacto", icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-purple-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">Agentia</span>
            </div>
            <div className="hidden md:flex space-x-1">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{section.label}</span>
                  </button>
                )
              })}
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Solicitar Demo</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-500 rounded-full blur-lg opacity-30"></div>
                <Bot className="relative h-24 w-24 text-purple-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent">
                Agentia
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">Agentes IA Personalizados para PyMEs</p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformamos tu negocio con inteligencia artificial accesible y personalizada. Automatiza procesos,
              mejora la atención al cliente y potencia tu crecimiento en México y LATAM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Solicitar Demo Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 text-lg px-8 py-3"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Características de la Plataforma</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnología de vanguardia diseñada específicamente para las necesidades de las PyMEs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bot className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Agentes IA Personalizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cada agente se adapta específicamente a tu industria, procesos y necesidades únicas de negocio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Implementación Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configuración en menos de 48 horas. Sin necesidad de conocimientos técnicos avanzados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Seguridad Empresarial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Protección de datos nivel bancario con cumplimiento de normativas mexicanas e internacionales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Soporte 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Equipo de soporte técnico en español, disponible las 24 horas para resolver cualquier consulta.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Escalabilidad Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Crece con tu negocio. Desde 10 hasta 10,000 interacciones diarias sin perder calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Disponibilidad Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tus agentes trabajan 24/7/365, atendiendo clientes incluso cuando tu equipo descansa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-16 bg-gradient-to-r from-purple-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios para tu PyME</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados medibles que impactan directamente en tu rentabilidad y crecimiento
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduce Costos Operativos hasta 60%</h3>
                  <p className="text-gray-600">
                    Automatiza tareas repetitivas y libera a tu equipo para actividades de mayor valor agregado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mejora la Satisfacción del Cliente</h3>
                  <p className="text-gray-600">
                    Respuestas instantáneas, precisas y personalizadas que superan las expectativas de tus clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aumenta Ventas hasta 40%</h3>
                  <p className="text-gray-600">
                    Convierte más prospectos con seguimiento automatizado y recomendaciones inteligentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Escala sin Límites</h3>
                  <p className="text-gray-600">
                    Atiende miles de clientes simultáneamente sin contratar personal adicional.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ROI Promedio en 6 Meses</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Ahorro en personal:</span>
                  <span className="font-bold text-green-600">$15,000 MXN/mes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Aumento en ventas:</span>
                  <span className="font-bold text-green-600">$25,000 MXN/mes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Reducción en errores:</span>
                  <span className="font-bold text-green-600">$8,000 MXN/mes</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-900">ROI Total:</span>
                  <span className="text-green-600">$48,000 MXN/mes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planes de Inversión</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Opciones flexibles que se adaptan al tamaño y presupuesto de tu empresa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Proyecto Único</CardTitle>
                <CardDescription>Ideal para probar la tecnología</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  $25,000 <span className="text-lg font-normal text-gray-600">MXN</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">1 Agente IA personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Hasta 1,000 interacciones/mes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Soporte por 3 meses</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Capacitación incluida</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Comenzar Proyecto
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">Más Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Suscripción Mensual</CardTitle>
                <CardDescription>Para empresas en crecimiento</CardDescription>
                <div className="text-3xl font-bold text-purple-600 mt-4">
                  $8,500 <span className="text-lg font-normal text-gray-600">MXN/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Hasta 3 Agentes IA</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Hasta 5,000 interacciones/mes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Soporte 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Actualizaciones automáticas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Analytics avanzados</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Iniciar Suscripción</Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Plan Empresarial</CardTitle>
                <CardDescription>Proyección a 5 años</CardDescription>
                <div className="text-3xl font-bold text-green-600 mt-4">
                  $450,000 <span className="text-lg font-normal text-gray-600">MXN</span>
                </div>
                <p className="text-sm text-gray-500">Ahorro del 30%</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Agentes IA ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Interacciones ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Gerente de cuenta dedicado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Integraciones personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">SLA garantizado 99.9%</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">Contactar Ventas</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audiencia Objetivo */}
      <section id="audiencia" className="py-16 bg-gradient-to-r from-green-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Audiencia Objetivo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sectores prioritarios donde Agentia genera el mayor impacto y valor
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Store className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Comercio Electrónico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Tiendas online, marketplaces y retailers digitales</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Atención al cliente 24/7</li>
                  <li>• Recomendaciones de productos</li>
                  <li>• Seguimiento de pedidos</li>
                  <li>• Recuperación de carritos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Servicios Financieros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Fintech, seguros, créditos y banca digital</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Consultas de saldos</li>
                  <li>• Solicitudes de crédito</li>
                  <li>• Asesoría financiera</li>
                  <li>• Gestión de reclamos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Educación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Instituciones educativas y plataformas de e-learning</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Tutorías personalizadas</li>
                  <li>• Información académica</li>
                  <li>• Soporte técnico</li>
                  <li>• Seguimiento estudiantil</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">PyMEs Generales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">Restaurantes, clínicas, talleres y servicios locales</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Reservas y citas</li>
                  <li>• Información de servicios</li>
                  <li>• Soporte postventa</li>
                  <li>• Encuestas de satisfacción</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Listo para Transformar tu Negocio?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Agenda una demo personalizada y descubre cómo Agentia puede revolucionar tu PyME
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Demo Personalizada</h3>
                    <p className="text-gray-600">30 minutos para ver Agentia en acción con casos de tu industria</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Consultoría Gratuita</h3>
                    <p className="text-gray-600">Análisis sin costo de cómo IA puede optimizar tu negocio</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Soporte Especializado</h3>
                    <p className="text-gray-600">Equipo técnico en español disponible para resolver dudas</p>
                  </div>
                </div>
              </div>

              <Card className="p-8 shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">Solicita tu Demo Gratuita</CardTitle>
                  <CardDescription>Completa el formulario y nos contactaremos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      <Calendar className="mr-2 h-5 w-5" />
                      Agendar Demo
                    </Button>
                    <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar Ahora
                    </Button>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>WhatsApp:</strong> +52 55 1234 5678
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Email:</strong> ventas@agentia.mx
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Horario:</strong> Lun-Vie 9:00-18:00 (GMT-6)
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-green-50 p-4 rounded-lg text-center">
                    <p className="text-sm font-medium text-gray-900 mb-2">🎁 Oferta de Lanzamiento</p>
                    <p className="text-xs text-gray-600">
                      Primeros 100 clientes reciben 3 meses gratis en plan mensual
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Agentia</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2024 Agentia. Transformando PyMEs con Inteligencia Artificial.</p>
              <p className="text-gray-500 text-xs mt-1">México • Colombia • Argentina • Chile • Perú</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
