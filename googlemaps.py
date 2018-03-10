import googlemaps
from datetime import datetime

#def rabin_karp():

def add(entries,name,time,pick,drop):
	print "dkjsh"



if __name__ == "__main__":
	gmaps = googlemaps.Client(key='AIzaSyDElTkym05k4wC4bIK0Z3WNGGUbVNbTWiU')
	pick_up_loc=raw_input("Enter pickup location:  ")
	geocode_result = gmaps.geocode(pick_up_loc)

	reverse_geocode_result = gmaps.reverse_geocode((12.9335,77.6143))
	entries={}
	name = "aaaaa"
	now = datetime.now()
	time = [21,0]
	cnt=1
	for i in geocode_result:
		print i['geometry']["u'location'"]
	for i in geocode_result:
		print cnt,"->",i['formatted_address']
		print "code->",i['place_id']
		print "\n\n"
		cnt=cnt+1
	n=input("select : ")
	pick=geocode_result[n-1]['place_id']
	cnt=1
	for i in reverse_geocode_result:
		print cnt,"->",i['formatted_address']
		print "code->",i['place_id']
		print "\n\n"
		cnt=cnt+1
	n=input("select : ")
	drop=reverse_geocode_result[n-1]['place_id']
	'''
	#Request directions via public transit
	now = datetime.now()
	directions_result = gmaps.directions("Sydney Town Hall",
	                                     "Parramatta, NSW",
	                                     mode="transit",
	                                     departure_time=now)
	'''
	#print directions_result
