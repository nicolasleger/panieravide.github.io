/*
 * This file is part of YoHours.
 * 
 * YoHours is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 * 
 * YoHours is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with YoHours.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * YoHours
 * Web interface to make opening hours data for OpenStreetMap the easy way
 * Author: Adrien PAVIE
 *
 * Utility JS methods
 */

/**
 * Converts minutes into HH:MM format
 * @param m The amount of minutes
 */
function minToHourMin(m) {
	var hours = Math.floor(m/60);
	if(hours < 10) { hours = "0"+hours; }
	var minutes = m % 60;
	if(minutes < 10) { minutes = "0"+minutes; }
	return hours+":"+minutes;
};

/**
 * Converts the day code from a sunday-starting week into the day code of a monday-starting week
 * @param d The sunday-starting week day (as string)
 * @return The monday-starting week day
 */
function swDayToMwDay(d) {
	var day = parseInt(d);
	return (day == 0) ? 6 : day - 1;
};

function getMonday() {
	var d = new Date();
	var day = d.getDay(),
	diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
	d.setDate(diff);
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

function getSunday() {
	var d = new Date();
	var day = d.getDay(),
	diff = d.getDate() + 7 - day + (day == 0 ? -6:1); // adjust when day is sunday
	d.setDate(diff);
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};