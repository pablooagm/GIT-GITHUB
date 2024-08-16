package com.generation;

import java.util.Scanner;

public class Codigo4 {
  //    Se agrega el método main para ejecutar programa
    public static void main(String[] args) { //

  //   Se coloca el parámetro 'System.in' para inicializar el scanner
    Scanner s = new Scanner(System.in);
    
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    // Scanner s1 = new Scanner(System.in);
    String j1 = s.nextLine();
    
    
    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
    // Scanner s2 = new Scanner(System.in);
    String j2 = s.nextLine();
    
    if (j1.equals(j2)) {
      System.out.println("Empate");
    } else {
      int g = 2;

      //Evaluar la opcion del jugador 1
      //Se pusieron los breaks
      switch(j1) {
        case "piedra":
          if (j2.equals("tijeras")) {
            g = 1;
          }
        break;
        case "papel":
          if (j2.equals("piedra")) {
            g = 1;
          }
          break;
        case "tijeras":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:

          System.out.println("Entrada no valida de uno de los jugadores");
          return;
          
      }
      System.out.println("Gana el jugador " + g);
    }
    
    s.close();

    }
  
  
}
