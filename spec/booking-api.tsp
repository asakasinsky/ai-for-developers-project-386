import "@typespec/http";
import "@typespec/rest";

using Http;
using Rest;

@service
@title("Calendar Booking API")
@version("1.0")
namespace BookingAPI;

model Owner {
  id: string;
  name: string;
  email: string;
}

model EventType {
  id: string;
  name: string;
  description: string;
  durationMinutes: int32;
}

model TimeSlot {
  startTime: zonedDateTime;
  endTime: zonedDateTime;
  available: boolean;
}

model Booking {
  id: string;
  eventTypeId: string;
  guestName: string;
  guestEmail: string;
  startTime: zonedDateTime;
  endTime: zonedDateTime;
  createdAt: zonedDateTime;
}

@route("/event-types")
interface EventTypes {
  @summary("Get all event types")
  @get
  listEventTypes(): EventType[];

  @summary("Get event type by ID")
  @get
  @route("/{eventTypeId}")
  getEventType(
    @path eventTypeId: string
  ): EventType | NotFoundError;
}

@route("/availability")
interface Availability {
  @summary("Get available slots for an event type (next 14 days)")
  @get
  @route("/{eventTypeId}")
  getAvailableSlots(
    @path eventTypeId: string
  ): TimeSlot[];
}

@route("/bookings")
interface Bookings {
  @summary("Create a booking")
  @post
  createBooking(@body payload: {
    eventTypeId: string;
    guestName: string;
    guestEmail: string;
    startTime: zonedDateTime;
  }): {
    @statusCode code: 201;
    @body booking: Booking;
  } | SlotUnavailableError;

  @summary("Get all upcoming bookings")
  @get
  listUpcomingBookings(): Booking[];
}

@error
model NotFoundError {
  code: "NOT_FOUND";
  message: string;
}

@error
model SlotUnavailableError {
  code: "SLOT_UNAVAILABLE";
  message: string;
}