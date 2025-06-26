/* # Movie Ticket Booking Application - Problem Statement

## Overview
Implement a Movie Ticket Booking Application for a Theatre. The application should handle the complete booking flow from seat selection to payment confirmation.

## System Requirements

### Theatre Structure
- **A Theatre has Screens** that run Shows for different Movies
- Each Show has a particular Movie, start time, duration, and is played in a particular Screen in the theatre
- Each Screen in the theatre has an arrangement of Seats that can be booked by Users

### User Management
- **Assume all Users are registered, authenticated, and logged in** to the Application

### Booking Flow

#### 1. Show Selection
- Once a User selects a particular show to book tickets for, a **UserBookingSession** starts
- Within this UserBookingSession, a User will be able to get the Available Seats for the show and select the Seats he wishes to book

#### 2. Seat Selection and Reservation
- It is **'good to have'** for the Application to have limits on the number of seats a User can book in a Ticket
- Once the user has selected a group of seats, these seats should become **TEMPORARILY_UNAVAILABLE** to all other Users

#### 3. Payment Processing
- The User then proceeds to make payment which can either be **SUCCESS or FAILURE**

#### 4. Payment Failure Handling
- **If Payment FAILED**: User can retry Payment for a maximum number of times. Beyond maximum retries, the seats are made **AVAILABLE**

#### 5. Payment Success Handling
- **If Payment SUCCEEDS**: Ticket or Booking Confirmation is generated and made available to the User. The UserBookingSession is closed and the Seats are made **PERMANENTLY_UNAVAILABLE**

#### 6. Manual Session Closure
- A User can also explicitly close the UserBookingSession after selecting seats and before making payment. In this case, the seats selected are made **AVAILABLE** once again

## Seat Status States
The system should manage three seat states:
1. **AVAILABLE** - Seat can be booked
2. **TEMPORARILY_UNAVAILABLE** - Seat is reserved during an active booking session
3. **PERMANENTLY_UNAVAILABLE** - Seat has been successfully booked

## Technical Requirements
- Implement the solution using **JavaScript only**
- Focus on the **functional part** with **console.log** for output
- Handle all the booking scenarios mentioned above
- Implement proper error handling and validation
- Ensure thread-safety considerations for concurrent bookings

## Expected Features
- Theatre initialization with screens, movies, and shows
- User session management
- Seat availability checking and selection
- Payment processing simulation
- Booking confirmation generation
- Session cleanup and seat release mechanisms
- Comprehensive logging of all operations

## Success Criteria
The application should successfully demonstrate:
1. Multiple users booking tickets simultaneously
2. Proper seat reservation and release mechanisms
3. Payment success and failure scenarios
4. Session management and cleanup
5. Complete audit trail through console logging */

//for single screen 

// Represents a seat in the theatre
class Seat {
    constructor(seatId) {
      this.seatId = seatId;
      // Status can be:
      // - AVAILABLE: open to book
      // - TEMPORARILY_UNAVAILABLE: selected but not yet confirmed
      // - PERMANENTLY_UNAVAILABLE: booked and confirmed
      this.status = 'AVAILABLE';
    }
  
    // Temporarily lock the seat during an active booking session
    makeTempUnavailable() {
      if (this.status === 'AVAILABLE') {
        this.status = 'TEMPORARILY_UNAVAILABLE';
      }
    }
  
    // Make the seat available again (on payment failure or session cancel)
    makeAvailable() {
      if (this.status !== 'PERMANENTLY_UNAVAILABLE') {
        this.status = 'AVAILABLE';
      }
    }
  
    // Mark seat as permanently booked after successful payment
    makePermanent() {
      this.status = 'PERMANENTLY_UNAVAILABLE';
    }
  }
  
  // Represents a show in a specific screen for a movie
  class Show {
    constructor(movie, screen, time, seatsCount) {
      this.movie = movie;     // Movie name
      this.screen = screen;   // Screen number or name
      this.time = time;       // Show timing
      this.seats = {};        // Map of seatId -> Seat instance
  
      // Initialize seats for this show
      for (let i = 1; i <= seatsCount; i++) {
        this.seats[`S${i}`] = new Seat(`S${i}`);
      }
    }
  
    // Return all seats that are currently available
    getAvailableSeats() {
      return Object.values(this.seats).filter(seat => seat.status === 'AVAILABLE');
    }
  
    // Get a seat by its ID
    getSeat(seatId) {
      return this.seats[seatId];
    }
  }
  
  // Represents a user's active booking session
  class UserBookingSession {
    constructor(userId, show) {
      this.userId = userId;
      this.show = show;
      this.selectedSeats = [];       // Seats selected by the user
      this.paymentAttempts = 0;      // Count of payment retries
      this.maxRetries = 5;           // Max allowed retries for payment
      this.active = true;            // Whether the session is still active
    }
  
    // User selects seats to book
    selectSeats(seatIds) {
      if (!this.active) throw new Error("Booking session is closed");
      
      seatIds.forEach(id => {
        const seat = this.show.getSeat(id);
        if (seat && seat.status === 'AVAILABLE') {
          seat.makeTempUnavailable();      // Temporarily lock the seat
          this.selectedSeats.push(seat);  // Track selected seat
        } else {
          throw new Error(`Seat ${id} is not available`);
        }
      });
    }
  
    // Simulate payment process (true = success, false = fail)
    async makePayment(success = true) {
      if (!this.active) throw new Error("Session already closed");
  
      this.paymentAttempts++;
  
      if (!success) {
        if (this.paymentAttempts < this.maxRetries) {
          console.log(`Payment failed. Retry attempt ${this.paymentAttempts}`);
        } else {
          // If max retries reached, release the seats and end session
          this.selectedSeats.forEach(seat => seat.makeAvailable());
          this.active = false;
          console.log("Payment failed. Max retries reached. Seats released.");
        }
        return false;
      } else {
        // Payment successful — confirm booking
        this.selectedSeats.forEach(seat => seat.makePermanent());
        this.active = false;
        console.log("Payment succeeded. Booking confirmed.");
        return true;
      }
    }
  
    // If user cancels session before paying, make seats available again
    cancelSession() {
      this.selectedSeats.forEach(seat => seat.makeAvailable());
      this.active = false;
      console.log("Session cancelled. Seats are now available.");
    }
  }
  
  // Sample Booking Flow
  
  // Create a new show with 10 seats
  const show = new Show("Kal Ho Naa Ho", "Screen 1", "7 PM", 10);
  
  // Start a booking session for a user
  const session = new UserBookingSession("user123", show);
  
  // Display available seats before booking
  console.log("Available Seats Before Booking:", show.getAvailableSeats().map(s => s.seatId));
  
  // Try selecting 2 seats
  try {
    session.selectSeats(["S1", "S2"]);
    console.log("Seats temporarily held for booking.");
  } catch (e) {
    console.log(e.message);
  }
  
  // Display available seats after selection
  console.log("Available Seats After Selection:", show.getAvailableSeats().map(s => s.seatId));
  
  // Simulate payment attempts
  session.makePayment(false); // Payment failed
  session.makePayment(false); // Payment failed again
  session.makePayment(true);  // Payment successful on 3rd attempt
  
  // Display final status of all seats
  console.log("Final Seat Status:");
  Object.values(show.seats).forEach(seat => {
    console.log(`${seat.seatId}: ${seat.status}`);
  });
  